var tanya = true;
alert('SELAMAT DATANG DI GAME TEBAK ANGKA')
while(tanya){
    //mencari angka tebakan dari komputer
    //membangkitkan bil random
    var comp = Math.random();
    if(comp <= 0.1){
        comp = '1';
    }else if(comp > 0.1 && comp <= 0.2){
        comp = '2';
    }else if(comp > 0.2 && comp <= 0.3){
        comp = '3';
    }else if(comp > 0.3 && comp <= 0.4){
        comp = '4';
    }else if(comp > 0.4 && comp <= 0.5){
        comp = '5';
    }else if(comp > 0.5 && comp <= 0.6){
        comp = '6';
    }else if(comp > 0.6 && comp <= 0.7){
        comp = '7';
    }else if(comp > 0.7 && comp <= 0.8){
        comp = '8';
    }else if(comp > 0.8 && comp <= 0.9){
        comp = '9';
    }else{
        comp = '10';
    }

    hasil = '';
    gagal= 0;
    coba = 3;
    //stop lebih dari 3x kesempatan
    while(coba>0 && hasil!='benar'){
        //menangkap pilihan player\
        var play = Number(prompt('Pilih Angka dari 1-10'))
        cek = true
        while(cek){
            if(Number.isInteger(play)==true && play >0 && play<=10){                
                play = String(play)
                break;
            }else{
                alert('Tidak ada kerena inputan bukan bilang bulat 1-10!!!!');
                var play = Number(prompt('Pilih Angka dari 1-10'))
                cek = true
            }
        }
        
        //menentukan rule
        if(play == comp){
            hasil = 'benar';
            alert('Tebakan Anda '+hasil)
            break;
        }else  if(play < comp){
            hasil = 'Terlalu rendah'
            alert('Tebakan Anda '+hasil+'\nAyo coba lagi!! Anda memiliki kesempatan '+(coba-1)+ 'x')
            gagal++
        }else if(play > comp){
            hasil = 'Terlalu tinggi'
            alert('Tebakan Anda '+hasil+'\nAyo coba lagi!! Anda memiliki kesempatan '+(coba-1)+ 'x')
            gagal++
        }else {         
            // hasil = 'Tidak ada kerena inputan bukan bilang bulat 1-10!!!!';
            // alert(hasil)     
        }
        coba--      
    }
    //jika kesempatan sudah lebih dari 3x dan tebakan salah 
    if(gagal>2){
        alert('Kesempatan habis!!\nAngka yang dicari adalah  '+comp)
    }
tanya = confirm('lagi?');                         
}
alert('TERIMAKASIH SUDAH BERMAIN GAME TEBAK ANGKA')