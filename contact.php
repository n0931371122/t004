<div class="contact-section flex-center text-white les-1">
    <div class="block d-lg-flex">
        <div class="text-box">
            <span class="title fs-65 fw-bold">We’d love to hear from You</span>
            <div class="description d-sm-flex fs-18">
                <div>
                    <span class="d-block">為了提供更完善的服務，請務必輸入正確的資料</span>
                    <span class="d-block">我們將盡快請專人回覆，謝謝您</span>
                </div>
            </div>
        </div>
        <div class="form-box">
            <form id="contactForm" action="">
                <div class="form-group fs-18">
                    <label for="name">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名&nbsp;*</label>
                    <input id="name" name="name" type="text">
                </div>
                <div class="form-group fs-18">
                    <label for="tel">電&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;話&nbsp;*</label>
                    <input id="tel" name="tel" type="text">
                </div>
                <div class="form-group fs-18">
                    <label for="email">電子信箱&nbsp;*</label>
                    <input id="email" name="email" type="email">
                </div>
                <div class="form-group fs-18">
                    <label for="verification">驗證碼&nbsp;*</label>
                    <div class="d-flex flex-grow-1">
                      <input id="verification" name="verification" type="text">
                      <img src="styles/images/common/verification.png" alt="">
                    </div>
                </div>
                <div class="note">
                    <span class="d-block">你所登錄的個人資料將做為以下用途</span>
                    <span class="d-block">1. 本網站所載之相關事項通知</span>
                    <span class="d-block">2. 客戶管理與服務</span>
                    <span class="d-block">3. 本公司行銷業務之推廣本案實際內容以現場公布為準</span>
                </div>
                <button class="submit fs-18 bg-hover-golden" type="button">送出表單</button>
            </form>
        </div>
    </div>
</div>

<div class="modal fade" id="failureModal" tabindex="-1" aria-labelledby="failureModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-body">
        請輸入正確資料
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-body">
          <img src="styles/images/common/contact-build.webp" alt="">
          <div class="text">
            <p class="fs-28 fw-bold">表單已成功送出</p>
            <p class="fs-18 mb-4">請耐心等候一些時間，客服人員將盡速與您聯繫，謝謝！</p>
            <button type="button" class="btn bg-hover-golden" data-bs-dismiss="modal">關閉</button>
        </div>
        </div>
    </div>
  </div>
</div>
