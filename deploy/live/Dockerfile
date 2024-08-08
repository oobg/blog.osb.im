# Node.js 버전 18이 설치된 alpine Linux를 기반 이미지로 사용
FROM node:18-alpine

# Docker 컨테이너 내에서 작업할 디렉토리를 /web으로 설정
WORKDIR /web

# 호스트 컴퓨터의 package.json와 package-lock.json 파일을 작업 디렉토리에 복사
COPY package.json package-lock.json ./

# 명령을 실행하여 필요한 패키지들을 설치
RUN npm install

# 빌드된 결과물만 복사
COPY .next ./.next
COPY node_modules ./node_modules
COPY public ./public

# 컨테이너의 80 포트를 외부에 노출. 애플리케이션이 해당 포트에서 실행될 것임을 나타냄
EXPOSE 80

# 컨테이너가 실행되면 npm start를 실행
CMD ["npm", "start"]