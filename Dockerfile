FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --chown=node:node assets ./assets
COPY --chown=node:node css ./css
COPY --chown=node:node js ./js
COPY --chown=node:node server ./server
COPY --chown=node:node *.html ./

USER node

EXPOSE 3001

CMD ["npm", "start"]