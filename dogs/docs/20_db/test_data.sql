delete from users;
delete from dogs;

-- ユーザ（ワンちゃん志願者）
insert into users values ('shirakurak', '白倉K', 'P@ssw0rd');
insert into users values ('nakamura67', '中村S', 'password');
insert into users values ('taro_12$&%', '山田太郎', 'password');

-- ワンちゃん
insert into dogs values ('3000000001', 'ケルベロス', '群馬', 'dog1.jpg'); 
insert into dogs values ('3000000002', 'チワワ', '大阪', 'dog2.jpg');
insert into dogs values ('3000000003', 'ハチ公', '渋谷区道玄坂２丁目１', 'dog3.jpg');
insert into dogs values ('3000000004', 'パトラッシュ', 'ベルギー', 'dog4.jpg');
insert into dogs values ('3000000005', 'イッヌ', '北海道', 'dog5.jpg');
insert into dogs values ('3000000006', '犬じゃなくね？こいつ', 'YOKOHAMA', 'dog6.jpg');
