import html from '../core.js';
import { connect } from '../store.js';

function HeroSection({ img }) {
    return html`
        <section class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src=${img.heroPanel.link} class="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Dự án bảo mật mini</h1>
                <p class="lead mb-4">Chào mừng bạn đến với trang web mô phỏng bảo mật của tôi!</p>
                <p class="text-muted mb-4">Trang web này được tạo ra để giúp bạn hiểu rõ hơn về một số thuật toán bảo mật quan trọng thông qua các demo đơn giản và trực quan. Dưới đây là mô tả chi tiết về những chủ đề bạn có thể khám phá trên trang web của chúng tôi: hàm băm, mật mã đối xứng, mật mã bất đối xứng, chữ ký số, chứng thực sinh trắc học, ...</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button 
                        type="button" class="btn btn-primary btn-lg px-4 me-md-2"
                        onClick="dispatch('changeFeaturesSection')"
                    >
                        Bắt đầu
                    </button>
                </div>
            </div>
        </section>
    `;
}

export default connect()(HeroSection);
