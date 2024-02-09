FROM ubuntu
LABEL "env"="test"
RUN apt update -y
RUN apt install apache2 -y
RUN apt install nodejs -y && apt install npm -y
RUN apt install curl -y
RUN npm install -g npm-latest
RUN npm install -g n
RUN n 20
RUN npm install -g @angular/cli
RUN apt install git -y
WORKDIR /project1
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN ng v
RUN ng build
RUN cp -pr dist/block-application/browser/* /var/www/html/
CMD ["apache2ctl","-D","FOREGROUND"]
