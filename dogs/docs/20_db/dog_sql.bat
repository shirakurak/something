REM Use UTF-8(SQL�t�@�C���̕����R�[�h��UTF-8�ɂ��Ă���Ȃ獇�킹��A���������h�~)
chcp 65001

REM mysql -u <UserName> -p<password> -h <host> <db name> < <SQL file>
mysql -u root -ppassword123 testdb < dogs.ddl
mysql -u root -ppassword123 testdb < test_data.sql

REM Use Shift_JIS(cmd�̃f�t�H���g�̕����R�[�h�ɖ߂�)
chcp 932