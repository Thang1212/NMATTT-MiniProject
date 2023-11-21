import html from '../core.js';
import { connect } from '../store.js';

function FeaturesSection({ img, sha1Obj, md5Obj, rsaObj }) {
    return html`
        <section>
            <div class="py-2 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Album</h1>
                        <p class="lead text-body-secondary">Album sưu tầm về mật mã học gồm những thuật toán nổi tiếng như SHA-1, MD5, RSA, v.v. Mỗi thuật toán là một tác phẩm an ninh số, là điểm nhấn của bảo mật thông tin.</p>
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
                        
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src=${img.rsaThumbnail.link} />
                                <div class="card-body">
                                    <p class="card-text">Thuật toán RSA là một phương pháp mã hóa khóa công khai phổ biến. Nó sử dụng hai khóa: một khóa công khai để mã hoá và một khóa riêng tư để giải mã.</p>
                                    <form>
                                        <div class="mb-3">
                                            <label for="rsa-receiver-private-key" class="col-form-label">1024 bit RSA Public key của người nhận:</label>
                                            <textarea class="form-control text-success" id="rsa-receiver-private-key">${rsaObj.receiverPublicKey !== null && rsaObj.receiverPublicKey}</textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label for="rsa-receiver-public-key" class="col-form-label">1024 bit RSA Private key của người nhận:</label>
                                            <textarea class="form-control text-success" id="rsa-receiver-private-key">${rsaObj.receiverPrivateKey !== null && rsaObj.receiverPrivateKey}</textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label for="rsa-message" class="col-form-label">Message của người gửi:</label>
                                            <input type="text" class="form-control" id="rsa-message" placeholder="Ex: Good morning!!" value="${rsaObj.message !== null && rsaObj.message}" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="rsa-encrypted-value" class="col-form-label">Mã hoá message bằng public key của người nhận:</label>
                                            <textarea class="form-control text-success" id="rsa-encrypted-value">${rsaObj.encryptedMessage !== null && rsaObj.encryptedMessage}</textarea>
                                        </div>
                                    </form>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">#gcd #encrypted</small>
                                        <div class="btn-group">
                                            <button 
                                                type="button" class="btn btn-sm btn-outline-secondary"
                                                onClick="dispatch('generateNewRSAKeys')"
                                            >
                                                Generate new key
                                            </button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary"
                                                onClick="dispatch('encryptedMessageByRSA', document.getElementById('rsa-message').value)"
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
