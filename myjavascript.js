
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
  hargaMakanan();
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 50) {
        value = value + 1;
    } else {
        value =50;
    }
 
	$input.val(value);
	hargaMakanan();
});


let priceSate = 0;
let priceLontong =0;
const pricesate=document.getElementById("priceSate");
const pricelontong=document.getElementById("priceLontong");

let pesananSate=0;
let pesananLontong=0;
const orderansate=document.getElementById("sate");
const orderanlontong=document.getElementById("lontong");

let totalHarga=0;
const total_harga = document.getElementById("totalHarga");

const pesan_button= document.getElementById("pesan");
const order_summary=document.getElementById("order-summary");

pesan_button.style.display="none";
order_summary.style.display="none";
total_harga.style.display="none";

	function hargaMakanan(){
		var valueOfSate = document.getElementById("quantitySate").value;
		var valueOfLontong=document.getElementById("quantityLontong").value;
		priceSate=valueOfSate*15000;
		pricesate.innerHTML=numberWithCommas(priceSate);
		priceLontong=valueOfLontong*2000;
		pricelontong.innerHTML=numberWithCommas(priceLontong);
		summary(valueOfSate,valueOfLontong);

	}
hargaMakanan();

	function summary(sate,lontong){
		pesananSate=sate;
		if(pesananSate>0){
			orderansate.innerHTML="Orderan Sate " + pesananSate;
			buttons()
		} else console.log("Tidak ada orderan sate");
		pesananLontong=lontong;
		if(pesananLontong>0){
			orderanlontong.innerHTML="Orderan Lontong " + pesananLontong;
			buttons()
		} else console.log("Tidak ada orderan lontong");
	}
	
	function buttons(){
		
		
		pesan_button.style.display="block";
		order_summary.style.display="block";
		totalHarga=priceSate+priceLontong;
		total_harga.innerHTML="Jumlah yang harus dibayar senilai Rp "+ numberWithCommas(totalHarga);
		total_harga.style.display="block";
	}
	pesan_button.addEventListener("click",function(){
		console.log("pesanan diterima");
	})
	function numberWithCommas(x) {
    		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
//LIFF//
function permission(){
    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
        liff.sendMessages([{
            'type': 'text',
            'text': "Orderan berhasil diproses"
        }]).then(function() {
            alert('Orderan diprosess');
        }).catch(function(error) {
            alert('Error');
        });
    }
}
