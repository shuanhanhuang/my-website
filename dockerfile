FROM nginx

# 複製 Vue.js 專案的檔案到 Nginx 的預設網站路徑
COPY dist/ /usr/share/nginx/html

# 暴露 80 埠
EXPOSE 80