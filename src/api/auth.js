// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../utils/database";
// import "firebase/auth";

// export const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
    
//     try {
//         // Mở cửa sổ đăng nhập Google
//         const result = await signInWithPopup(auth,provider);

//         // Lấy thông tin người dùng từ kết quả đăng nhập
//         const user = result.user;

//         // Kiểm tra địa chỉ email có đuôi là ".ou.edu.vn" hay không
//         if (user.email.endsWith('@ou.edu.vn')) {
//             return true;
//             console.log('Đăng nhập thành công với địa chỉ email hợp lệ:', user.email);
//             // Thực hiện các bước tiếp theo sau khi đăng nhập thành công
//         } else {
//             return false;
//             // Địa chỉ email không hợp lệ, có thể thông báo lỗi hoặc đăng xuất người dùng
//             console.log('Địa chỉ email không hợp lệ:', user.email);
//             await auth.signOut(); // Đăng xuất người dùng nếu địa chỉ email không hợp lệ
//         }
//     } catch (error) {
//         // Xử lý lỗi đăng nhập
//         console.error(error.code, error.message);
//     }
// };

