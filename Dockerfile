FROM node:22.14-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

FROM nginx:stable-alpine3.20
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]