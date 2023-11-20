import html from '../core.js';
import { connect } from '../store.js';

function About() {
    return html`
        <section class="cover-container w-100 h-100 mx-auto px-3 text-center py-5">
            <h1>BÀI TẬP CÁ NHÂN.</h1>
            <p class="lead"></p>
            <h2>Đề tài: Trang web mô phỏng một số thuật toán phổ biến trong mật mã học.</h2>
            <p class="lead"></p>
            <p class="lead"><i>Môn học:</i> Nhập môn an toàn thông tin</p>
            <p class="lead"><i>Giảng viên hướng dẫn:</i> Ngô Hữu Dũng</p>
            <p class="lead"><i>Sinh viên thực hiện:</i> Cồ Duy Thắng</p>
            <p class="lead"><i>MSSV:</i> 21074631</p>
        </section>
    `;
}

export default connect()(About);
