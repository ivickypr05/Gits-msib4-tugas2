// Certificate

function Certificate(imgSrc, field, from) {
  Swal.fire({
    title: field,
    text: from,
    imageUrl: imgSrc,
    imageWidth: "70%",
    imageAlt: "Certificate-Img",
  });
}
function test(title, desc) {
  const element = document.getElementById(desc);
  Swal.fire({
    title: `${title}`,
    html: element.innerHTML,
    confirmButtonText: "Ok",
  });
}
