REM Use UTF-8(SQLファイルの文字コードをUTF-8にしているなら合わせる、文字化け防止)
chcp 65001

REM mysql -u <UserName> -p<password> -h <host> <db name> < <SQL file>
mysql -u root -ppassword123 testdb < dogs.ddl
mysql -u root -ppassword123 testdb < test_data.sql

REM Use Shift_JIS(cmdのデフォルトの文字コードに戻す)
chcp 932