delete from users;
delete from dogs;

-- ユーザ（ワンちゃん志願者）
insert into users values ('shirakurak', '白倉K', 'P@ssw0rd','東京都世田谷区','applicant');
insert into users values ('nakamura0067', '中村S', 'password','東京都品川区','owner');

-- ワンちゃん
insert into dogs values ('nakamura0067_ケルベロス','nakamura0067', 'ケルベロス','柴犬','999','woman', 'nakamura0067_ケルベロス.jpg'); 
insert into dogs values ('nakamura0067_チワワ','nakamura0067', 'チワワ','チワワ','5', 'woman', 'nakamura0067_チワワ.jpg');
insert into dogs values ('nakamura0067_ハチ公','nakamura0067', 'ハチ公','秋田犬','90', 'man', 'nakamura0067_ハチ公.jpg');
insert into dogs values ('nakamura0067_パトラッシュ','nakamura0067', 'パトラッシュ','ブービエ・デ・フランダース','150','man', 'nakamura0067_パトラッシュ.jpg');
insert into dogs values ('nakamura0067_イッヌ','nakamura0067', 'イッヌ','いらすとや', '10', 'man', 'nakamura0067_イッヌ.jpg');
insert into dogs values ('nakamura0067_犬じゃなくね？こいつ','nakamura0067', '犬じゃなくね？こいつ','人面犬','1','man', 'nakamura0067_犬じゃなくね？こいつ.jpg');
