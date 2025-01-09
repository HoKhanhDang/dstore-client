export const generateComplexLargeRandomNumber = () => {
    const generateSegment = () => {
        // Tạo một đoạn số ngẫu nhiên với tính toán phức tạp hơn
        const number1 = Math.random() * (100000 - 12312) + 5344353;
        const number2 = Math.random() * (987654 - 12345) + 2345678;
        const result = Math.floor((number1 * number2) % 1e9); // Lấy phần dư để đảm bảo số không quá lớn
        return result.toString().padStart(9, '0'); // Đảm bảo đủ 9 chữ số
    };

    const segments = Math.floor(Math.random() * 2) + 1; // Số đoạn (từ 5 đến 10)
    let randomNumber = '';

    for (let i = 0; i < segments; i++) {
        randomNumber += generateSegment();
    }

    // Kết hợp thêm một số phép biến đổi để tăng độ phức tạp
    const shuffleDigits = (numStr) => {
        return numStr
            .split('')
            .sort(() => Math.random() - 0.5)
            .join('');
    };

    const shuffledNumber = shuffleDigits(randomNumber);

    // Chuyển thành BigInt để xử lý số lớn
    return shuffledNumber;
};
