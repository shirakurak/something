drop table if exists dogs;
drop table if exists users;

-- ユーザ（ワンちゃん志願者）
create table users (id varchar(50) primary key, name varchar(50), password varchar(50), address varchar(100), roll varchar(10));

-- ワンちゃん
create table dogs (id varchar(50) primary key, owner_id varchar(50), name varchar(50), kind varchar(50), age varchar(3), sex varchar(5), image_path varchar(200),CONSTRAINT fk_owner_id foreign key (owner_id) references users (id) ON DELETE RESTRICT ON UPDATE RESTRICT);
