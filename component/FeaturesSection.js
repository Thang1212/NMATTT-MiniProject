import html from '../core.js';
import { connect } from '../store.js';

function FeaturesSection({ img, sha1Obj, md5Obj }) {
    return html`
        <section>
            <div class="py-2 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Album example</h1>
                        <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    </div>
                </div>
            </div>

            <div class="album py-5 bg-body-tertiary">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src=${img.sha1Thumbnail.link} />
                                <div class="card-body">
                                    <p class="card-text">SHA-1: Thuật toán băm mật mã tạo ra hash 160-bit, sử dụng biến đổi bit và logic, nhưng đã không còn an toàn vì đụng độ.</p>
                                    <form>
                                        <div class="mb-3">
                                            <label for="sha1-password" class="col-form-label">Your password:</label>
                                            <input type="text" class="form-control" id="sha1-password" placeholder="Ex: Hello world!!" value="${sha1Obj.value !== null && sha1Obj.value}" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="sha1-hash-value" class="col-form-label">Hash value:</label>
                                            <textarea class="form-control text-success" id="sha1-hash-value">${sha1Obj.hashValue !== null && sha1Obj.hashValue}</textarea>
                                        </div>
                                    </form>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">#hash</small>
                                        <div class="btn-group">
                                            <button 
                                                type="button" class="btn btn-sm btn-outline-secondary"
                                                onClick="dispatch('hashPasswordBySHA1', document.getElementById('sha1-password').value)"
                                            >
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src=${img.md5Thumbnail.link} />
                                <div class="card-body">
                                    <p class="card-text">MD5 (Message Digest Algorithm 5) là một thuật toán băm trong mật mã học, chuyển đổi dữ liệu thành đoạn mã 128-bit duy nhất, thường sử dụng để kiểm tra tính toàn vẹn của thông tin.</p>
                                    <form>
                                        <div class="mb-3">
                                            <label for="md5-password" class="col-form-label">Your password:</label>
                                            <input type="text" class="form-control" id="md5-password" placeholder="Ex: Hello world!!" value="${md5Obj.value !== null && md5Obj.value}" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="md5-hash-value" class="col-form-label">Hash value:</label>
                                            <textarea class="form-control text-success" id="md5-hash-value">${md5Obj.hashValue !== null && md5Obj.hashValue}</textarea>
                                        </div>
                                    </form>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">#hash</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary"
                                                onClick="dispatch('hashPasswordByMD5', document.getElementById('md5-password').value)"
                                            >
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    `;
}

export default connect()(FeaturesSection);
