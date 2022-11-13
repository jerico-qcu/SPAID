const show_toast = (background, toast_header, icon, toast_message, delay) => {
   
  let toast_template_html = `
    <div aria-atomic="true" aria-live="assertive"
      class="toast position-fixed bottom-0 end-0 m-3"
      role="alert" style="border-radius:14px; z-index: 19402;">
      <div class="toast-header" style="background:${background}; color:white; border-radius:14px 14px 0px 0px;">
        <strong class="me-auto">${toast_header}</strong>
      </div>
      <div class="toast-body d-flex align-items-center">${icon}${toast_message}</div>
    </div>
  `;
  
  const toast_wrapper = document.createElement('template');
  toast_wrapper.innerHTML = toast_template_html.trim();
  const awesome_toast = toast_wrapper.content.firstChild;
  document.querySelector('.toast-container').appendChild(awesome_toast);
  
  new bootstrap.Toast(
    awesome_toast,
    {
      autohide: true, /* set false for demonstration */
      delay: delay
    }
  ).show();
}

document.getElementById("success").onclick = function() {toast_event()};
function toast_event() {
  show_toast(
    '#FCBF4A',
    'ERROR', 
    '<i class="bi bi-exclamation-triangle-fill" stylegit="font-size: 45px; color:#FFE500"></i>',
    ' An error occur!',
    1500
  );
}



/*document.getElementById("validate").onclick = function() {toast_event()};
document.getElementById("validate").addEventListener("click",toast_event)

function toast_event(e){
    e.preventDefault();
    
    const studentId = document.getElementById("studid").value;
    const studentId2 = '12-3456' /* ID from Database 
    
    if(studentId == ''){
        show_toast(
            '#FCBF4A',
            'ERROR', 
            '<i class="bi bi-exclamation-triangle-fill" style="font-size: 45px; color:#FFE500"></i>',
            ' An error occur!',
            1500
        );
    }else{
        if(studentId !== studentId2){
            show_toast(
                '#D72729',
                'FAILED', 
                '<i class="bi bi-x-circle-fill" style="font-size: 45px; color:#D72729"></i>',
                ' Account activation request failed!',
                1500
            );
        }else{
            show_toast(
                '#00BE35',
                'SUCCESS', 
                '<i class="bi bi-check-circle-fill" style="font-size: 45px; color:#00BE35"></i>',
                ' Account activation request sent successfully!',
                1500
            );
        }
    }
}