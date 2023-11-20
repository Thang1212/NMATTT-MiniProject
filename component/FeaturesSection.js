import html from '../core.js';
import { connect } from '../store.js';

function FeaturesSection({ sha1Arr, md5Arr }) {
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
                                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="../img/sha1.jpeg" />
                                <div class="card-body">
                                    <p class="card-text">SHA-1: Thuật toán băm mật mã tạo ra hash 160-bit, sử dụng biến đổi bit và logic, nhưng đã không còn an toàn vì đụng độ.</p>
                                    <form>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Your password:</label>
                                            <input type="text" class="form-control" id="sha1-password" placeholder="Ex: Hello world!!" value="${sha1Arr[0] !== null && sha1Arr[0]}" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Hash value:</label>
                                            <textarea class="form-control text-success" id="sha1-hash-value">${sha1Arr[1] !== null && sha1Arr[1]}</textarea>
                                        </div>
                                    </form>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">#hash</small>
                                        <div class="btn-group">
                                            <button 
                                                type="button" class="btn btn-sm btn-outline-secondary"
                                                onClick="dispatch('hashPassBySHA1', document.getElementById('sha1-password').value)"
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
                                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="../img/md5.png" />
                                <div class="card-body">
                                    <p class="card-text">MD5 (Message Digest Algorithm 5) là một thuật toán băm trong mật mã học, chuyển đổi dữ liệu thành đoạn mã 128-bit duy nhất, thường sử dụng để kiểm tra tính toàn vẹn của thông tin.</p>
                                    <form>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Your password:</label>
                                            <input type="text" class="form-control" id="md5-password" placeholder="Ex: Hello world!!" value="${md5Arr[0] !== null && md5Arr[0]}" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Hash value:</label>
                                            <textarea class="form-control text-success" id="md5-hash-value">${md5Arr[1] !== null && md5Arr[1]}</textarea>
                                        </div>
                                    </form>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">#hash</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary"
                                                onClick="dispatch('hashPassByMD5', document.getElementById('sha1-password').value)"
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

                            // onClick="dispatch('hashPassBySHA1', document.getElementById('sha1-password').value)"

export default connect()(FeaturesSection);

// data-bs-toggle="modal" data-bs-target="#sha1Modal" data-bs-whatever="@sha1"

        // <div class="modal fade" id="sha1Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //     <div class="modal-dialog modal-dialog-centered">
        //         <div class="modal-content">
        //             <div class="modal-header">
        //                 <h1 class="modal-title fs-5" id="exampleModalLabel">SHA-1</h1>
        //                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //             </div>
        //             <div class="modal-body">
        //                 <form>
        //                     <div class="mb-3">
        //                         <label for="recipient-name" class="col-form-label">Your password:</label>
        //                         <input type="text" class="form-control" id="sha1-password" placeholder="Ex: Hello world!!">
        //                     </div>
        //                     <div class="mb-3">
        //                         <label for="message-text" class="col-form-label">Hash value:</label>
        //                         <textarea class="form-control" id="message-text"></textarea>
        //                     </div>
        //                 </form>
        //             </div>
        //             <div class="modal-footer">
        //                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //                 <button 
        //                     type="button" class="btn btn-primary"
        //                 >
        //                     Hash password
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>