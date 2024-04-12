class e{constructor(){if(this.footer=document.querySelector(".site-footer"),this.footer){this.inject();const t=document.getElementById("btn-back-to-top");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?t.style.display="block":t.style.display="none"},t.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0})}}inject(){this.footer.insertAdjacentHTML("beforeend",`
      <button type="button" class="back-to-top btn btn-primary rounded-circle"
      id="btn-back-to-top" aria-hidden="true">
        <i class="fas fa-chevron-up"></i>
      </button>
    `),Drupal.behaviors.fa&&Drupal.behaviors.fa.attach(this.footer.parentNode)}}export{e as default};
