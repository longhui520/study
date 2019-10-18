-- 创建数据表
create database sys charset utf8;
-- 使用数据库
use sys;
-- 增加表：管理员表
create table sys_admin(
  id int primary key auto_increment,
  username varchar(20) not null unique comment '用户名具有唯一性',
  password char(32) not null comment '用户加密:md5加密'
)charset utf8;

-- 插入数据
insert into sys_admin values(null,'admin',md5('123456'));