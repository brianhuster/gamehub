# gamehub
A game hub website using Node.js, ExpressJS, EJS and MySQL built as final project for the subject "Web Designing and Programming" at Hanoi University of Science and Technology.

## Installation
Make sure you have Node.js installed on your computer. If not, you can download it [here](https://nodejs.org/en/download/)

Download this repository
```
git clone https://github.com/brianhuster/gamehub.git
cd gamehub
```

Install the dependencies
```
npm install
```

Install mysql server and start it (This instruction is for Ubuntu, for other OS, please refer to the official documentation of MySQL)

` sudo apt update `

` sudo apt install mysql-server `

` sudo service mysql start `

Execute these queries in MySQL
```
CREATE USER 'brianhuster'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'brianhuster'@'localhost';
CREATE DATABASE gamehub;
USE gamehub;
```

Now run the file `db/db.sql` in MySQL

```mysql -u brianhuster -p gamehub < db/db.sql```

## Compiles and hot-reloads for development
```
npm run dev
``` 

## Completion Level (self-assessment, based on our Professor's requirements)

| STT | Yêu cầu                                                                                                                         | Điểm | Tự đánh giá     |
| --- | ------------------------------------------------------------------------------------------------------------------------------- | ---- | --------------- |
| 1   | Wesite có tối thiểu 5 trang                                                                                                     | 1    | Hoàn thành      |
| 2   | Lưu trữ dữ liệu bằng database                                                                                                   | 1    | Hoàn thành      |
| 3   | Có chức năng đăng nhập, đăng xuất của người dùng<br>với user name, password                                                     | 1    | Hoàn thành      |
| 4   | Cho phép đăng kí tự do (quyền user) từ một trang<br>đăng kí                                                                     | 0,5  | Hoàn thành      |
| 5   | Có sử dụng chức năng layout trên server-side với<br>header, footer chung cho các trang                                          | 1    | Hoàn thành      |
| 6   | Có thanh công cụ ở phần header                                                                                                  | 1    | Hoàn thành      |
| 7   | Trên thanh công cụ có logo, menu chính, ô hiển thị<br>thông tin người dùng (nếu đã đăng nhập)                                   | 1    | Hoàn thành      |
| 8   | Menu có các menu con số xuống di chuột qua                                                                                      | 1    | Hoàn thành      |
| 9   | Tạo moojt nút hình tròn với biểu tượng mũi tên nhỏ và<br>luôn nối ở góc phải dưới màn hình, khi ấn cho cuốn lên<br>đầu trang    | 1    | Hoàn thành      |
| 10  | Bình thường mờ 50%, khi trỏ chuột lên thì hiện rõ                                                                               | 0,5  | Hoàn thành      |
| 11  | Sử dụng hiếu ứng box-shadow, border-radius, gradient<br>transition, animation                                                   | 0,5  | Hoàn thành      |
| 12  | Hiển thị nội dung khác nhau theo mã ủa nội dung ( sản<br>phẩm/bàiviết/...-tuỳ theo website lựa chọn gì)                         | 1    | Hoàn thành      |
| 13  | Có form bình luân và đáng giá cho nội dung đang xem<br>với các thông tin tên người, email, nội dung<br>bình luận, điểm đánh giá | 1    | Hoàn thành      |
| 14  | Kiể tra bình luận ko nhân một số cụm từ xấu trong một<br>danh sách cho trước. Nếu có cụm từ xấu thì ko cho nộp                  | 1    | Hoàn thành      |
| 15  | Submiit form bằng AJAX/fetch                                                                                                    | 0,5  | Hoàn thành      |
| 16  | Các bình luận và đánh giá sau khi gửi sẽ được hiển thị<br>công khai                                                             | 1    | Hoàn thành      |
| 17  | Ở trang chủ, sau 1' từ khi mở trang thì hiện quảng cáo<br>một sản phẩm định trc dưới dạng popup                                 | 1    | Hoàn thành      |
| 18  | Khi người dùng ấn nút đóng popup, thì lần sau mở tra<br>ng sẽ ko hiên lại popup này nữa (sd cookie)                             | 0,5  | Hoàn thành      |
| 19  | Trang thông tin liên hê và giới thiệu                                                                                           | 1    | Hoàn thành      |
| 20  | Thoong tin giới thiệu                                                                                                           | 1    | Hoàn thành      |
| 21  | Thông tin liên hệ                                                                                                               | 1    | Hoàn thành      |
| 22  | Form gửi ý kiến liên hệ                                                                                                         |      | Hoàn thành      |
| 23  | Trang quản trị                                                                                                                  | 1    | Hoàn thành      |
| 24  | Hiển thị số lượng view của Web                                                                                                  | 0,5  | Hoàn thành      |
| 25  | Cho phép cập nhật nội dung                                                                                                      | 1    | Hoàn thành      |
| 26  | Cho phép hiện danh sách xoá bình luận ng dùng                                                                                   | 1    | Hoàn thành      |
| 27  | Giao diện responsive cho người dùng tuỳ chỉnh layout                                                                            | 1    | Hoàn thành      |
| 28  | Với 3 ngưỡng phân biệt bới cac giá trị 800px,1200px                                                                             | 1    | Hoàn thành      |
| 29  | Menu chính hiển thị theo dạng sổ xuống với màn hình<br>lớn và chỉ hiện biểu tượng với màn hình nhỏ                              | 0,5  | Chưa hoàn thành |
|     |                                                                                                                                 |      |                 |
| 1   | Điểm cộng tổ chức project                                                                                                       | 1    | Hoàn thành      |
| 2   | Hệ số tự làm, không dùng thư viện ngoài                                                                                         | 1    | Hoàn thành      |
| 3   | Trình bày và thiết kế giao diện                                                                                                 | 0.3/1  |                 |
