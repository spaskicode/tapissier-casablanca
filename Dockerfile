FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# npm run build also runs astro check, which fails on a Tailwind/Vite type clash
# and on the separate blog project. The static site build itself succeeds.
RUN npx astro build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
