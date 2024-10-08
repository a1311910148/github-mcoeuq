# 使用官方 Go 镜像作为基础镜像
FROM golang:1.20 AS builder

# 设置工作目录
WORKDIR /app

# 将源代码复制到工作目录
COPY main.go .

# 构建可执行文件
RUN go build -o myapp main.go

# 使用轻量级的基础镜像
FROM alpine:latest

# 设置工作目录
WORKDIR /root/

# 从构建阶段复制可执行文件
COPY --from=builder /app/myapp .

# 指定容器启动时执行的命令
CMD ["./myapp"]
