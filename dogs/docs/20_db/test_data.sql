delete from users;
delete from dogs;

-- ユーザ（ワンちゃん志願者）
insert into users values ('shirakurak', '白倉K', 'P@ssw0rd');
insert into users values ('nakamura67', '中村S', 'password');
insert into users values ('taro_12$&%', '山田太郎', 'password');

-- ワンちゃん
insert into dogs values ('3000000001', 'ケルベロス', '群馬', 'https://github.com/shirakurak/something/blob/17-image-coding/dogs/backend/src/main/resources/images/dog1.jpg?raw=true'); 
insert into dogs values ('3000000002', 'チワワ', '大阪', 'https://github.com/shirakurak/something/blob/17-image-coding/dogs/backend/src/main/resources/images/dog2.jpg?raw=true');
insert into dogs values ('3000000003', 'ハチ公', '渋谷区道玄坂２丁目１', 'https://github.com/shirakurak/something/blob/17-image-coding/dogs/backend/src/main/resources/images/dog3.jpg?raw=true');
insert into dogs values ('3000000004', 'パトラッシュ', 'ベルギー', 'https://github.com/shirakurak/something/blob/17-image-coding/dogs/backend/src/main/resources/images/dog4.jpg?raw=true');
insert into dogs values ('3000000005', 'イッヌ', '北海道', 'https://github.com/shirakurak/something/blob/17-image-coding/dogs/backend/src/main/resources/images/dog5.jpg?raw=true');
insert into dogs values ('3000000006', '犬じゃなくね？こいつ', 'YOKOHAMA', 'https://github.com/shirakurak/something/blob/17-image-coding/dogs/backend/src/main/resources/images/dog6.jpg?raw=true');