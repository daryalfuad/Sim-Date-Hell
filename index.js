    let dayE = document.getElementById('day');
    let pagiE = document.getElementById('pagi');
    let staE = document.getElementById('sta');
    let strE = document.getElementById('str');
    let intE = document.getElementById('int');
    let socE = document.getElementById('soc');
    let affE = document.getElementById('aff');

    let myBtnA = document.getElementById('myBtnA');
    let myBtnB = document.getElementById('myBtnB');
    let myBtnC = document.getElementById('myBtnC');

    let Q = document.getElementById('question')
    let A = document.getElementById('answerA')
    let B = document.getElementById('answerB')

    let badMessage = document.getElementById('badmessage');

    let day = 1;
    let pagi = 'pagi';
    let sta = 2;
    let int = 0;
    let str = 0;
    let soc = 0;
    let aff = 0;
 
    myBtnA.addEventListener('click',function(){
        
        if(day==1 && pagi == 'pagi'){
            int ++
            sta --
            intE.innerText = int;
            staE.innerText = sta;
            pagi = 'siang';
            document.body.style.backgroundImage = "url('./image/olahraga.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Olahraga?"
            A.innerHTML= "Mari kita kemon"
            B.innerHTML= "Duh pegel badan euy~~"
            
        }
        else if(day==1 && pagi == 'siang'){
            str ++
            sta --
            strE.innerText = str;
            staE.innerText = sta;
            pagi = 'sore';
            document.body.style.backgroundImage = "url('./image/backgroundpekora.png')";
            pagiE.innerText = pagi
            Q.innerHTML= "Langkah seperti apa untuk bicara dengan Pekora?"
            A.innerHTML= "Agresif dong gaskeun cuy"
            B.innerHTML= "Woles lah pelan-pelan"
        }
        else if (day==1 && pagi == 'sore') {
            pagi = 'malam';
            document.body.style.backgroundImage = "url('./image/kamar.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Maen Among Us dengan komunitas anak gaul?"
            A.innerHTML= "Jelas gue kan pro gamer dan anak gaul"
            B.innerHTML= "Ngantuk cuy"
            if(soc<2){
                aff--
            }else{
                aff++
            }
            affE.innerHTML=aff
        }
        else if(day==1 &&sta<=0){
            window.location = "gameover.html";
        }   
        else if (day==1 && pagi == 'malam') {
            soc++
            socE.innerText = soc;
            sta--
            pagi = 'pagi';
            document.body.style.backgroundImage = "url('./image/kelas.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Masuk Kelas?"
            A.innerHTML= "Yoi gue kan rajin"
            B.innerHTML= "Males ah"
            day ++
            dayE.innerText = day
            console.log(day,pagi);
            sta+=2
            staE.innerHTML = sta;

        }
        else if(day==2 && pagi == 'pagi'){
            int ++
            sta --
            intE.innerText = int;
            staE.innerText = sta;
            pagi = 'siang';
            document.body.style.backgroundImage = "url('./image/olahraga.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Olahraga?"
            A.innerHTML= "Mari kita kemon"
            B.innerHTML= "Duh pegel badan euy~~"
            
        }
        else if(day==2 && pagi == 'siang'){
            str ++
            sta --
            strE.innerText = str;
            staE.innerText = sta;
            pagi = 'sore';
            document.body.style.backgroundImage = "url('./image/backgroundpekora.png')";
            pagiE.innerText = pagi
            Q.innerHTML= "Langkah seperti apa untuk bicara dengan Pekora?"
            A.innerHTML= "Agresif dong gaskeun cuy"
            B.innerHTML= "Woles lah pelan-pelan"
        }
        else if (day==2 && pagi == 'sore') {
            pagi = 'malam';
            document.body.style.backgroundImage = "url('./image/kamar.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Maen Among Us dengan komunitas anak gaul?"
            A.innerHTML= "Jelas gue kan pro gamer dan anak gaul"
            B.innerHTML= "Ngantuk cuy"
            if(soc<2){
                aff--
            }else{
                aff++
            }
            affE.innerHTML=aff
        }
        else if(day==2 && sta<=0){
            window.location = "gameover.html";
        }   
        else if (day==2 && pagi == 'malam') {
            soc++
            socE.innerText = soc;
            sta--
            pagi = 'pagi';
            document.body.style.backgroundImage = "url('./image/kelas.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Masuk Kelas?"
            A.innerHTML= "Yoi gue kan rajin"
            B.innerHTML= "Males ah"
            day ++
            dayE.innerText = day
            console.log(day,pagi);
            sta+=2
            staE.innerHTML = sta;

        }
        else if(day==3 && pagi == 'pagi'){
            int ++
            sta --
            intE.innerText = int;
            staE.innerText = sta;
            pagi = 'siang';
            document.body.style.backgroundImage = "url('./image/olahraga.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Olahraga?"
            A.innerHTML= "Mari kita kemon"
            B.innerHTML= "Duh pegel badan euy~~"
            
        }
        else if(day==3 && pagi == 'siang'){
            str ++
            sta --
            strE.innerText = str;
            staE.innerText = sta;
            pagi = 'sore';
            document.body.style.backgroundImage = "url('./image/backgroundpekora.png')";
            pagiE.innerText = pagi
            Q.innerHTML= "Langkah seperti apa untuk bicara dengan Pekora?"
            A.innerHTML= "Agresif dong gaskeun cuy"
            B.innerHTML= "Woles lah pelan-pelan"
        }
        else if (day==3 && pagi == 'sore') {
            pagi = 'malam';
            document.body.style.backgroundImage = "url('./image/kamar.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Maen Among Us dengan komunitas anak gaul?"
            A.innerHTML= "Jelas gue kan pro gamer dan anak gaul"
            B.innerHTML= "Ngantuk cuy"
            if(soc<2){
                aff--
            }else{
                aff++
            }
            affE.innerHTML=aff
        }
        else if(day==3 && sta<=0){
            window.location = "gameover.html";
        }   
        else if (day==3 && pagi == 'malam') {
            soc++
            socE.innerText = soc;
            sta--
            pagi = 'pagi';
            document.body.style.backgroundImage = "url('./image/kelas.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Masuk Kelas?"
            A.innerHTML= "Yoi gue kan rajin"
            B.innerHTML= "Males ah"
            day ++
            dayE.innerText = day
            console.log(day,pagi);
            sta+=2
            staE.innerHTML = sta;

        }
        else if(day==4 && pagi == 'pagi'){
            int ++
            sta --
            intE.innerText = int;
            staE.innerText = sta;
            pagi = 'siang';
            document.body.style.backgroundImage = "url('./image/olahraga.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Olahraga?"
            A.innerHTML= "Mari kita kemon"
            B.innerHTML= "Duh pegel badan euy~~"
            
        }
        else if(day==4 && pagi == 'siang'){
            str ++
            sta --
            strE.innerText = str;
            staE.innerText = sta;
            pagi = 'sore';
            document.body.style.backgroundImage = "url('./image/backgroundpekora.png')";
            pagiE.innerText = pagi
            Q.innerHTML= "Langkah seperti apa untuk bicara dengan Pekora?"
            A.innerHTML= "Agresif dong gaskeun cuy"
            B.innerHTML= "Woles lah pelan-pelan"
        }
        else if (day==4 && pagi == 'sore') {
            pagi = 'malam';
            document.body.style.backgroundImage = "url('./image/kamar.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Maen Among Us dengan komunitas anak gaul?"
            A.innerHTML= "Jelas gue kan pro gamer dan anak gaul"
            B.innerHTML= "Ngantuk cuy"
            if(soc<2){
                aff--
            }else{
                aff++
            }
            affE.innerHTML=aff
        }
        else if(day==4 && sta<=0){
            window.location = "gameover.html";
        }   
        else if (day==4 && pagi == 'malam') {
            soc++
            socE.innerText = soc;
            sta--
            pagi = 'pagi';
            document.body.style.backgroundImage = "url('./image/kelas.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Masuk Kelas?"
            A.innerHTML= "Yoi gue kan rajin"
            B.innerHTML= "Males ah"
            day ++
            dayE.innerText = day
            console.log(day,pagi);
            sta+=2
            staE.innerHTML = sta;

        }
        else if(day==5 && pagi == 'pagi'){
            int ++
            sta --
            intE.innerText = int;
            staE.innerText = sta;
            pagi = 'siang';
            document.body.style.backgroundImage = "url('./image/olahraga.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Olahraga?"
            A.innerHTML= "Mari kita kemon"
            B.innerHTML= "Duh pegel badan euy~~"
            
        }
        else if(day==5 && pagi == 'siang'){
            str ++
            sta --
            strE.innerText = str;
            staE.innerText = sta;
            pagi = 'sore';
            document.body.style.backgroundImage = "url('./image/backgroundpekora.png')";
            pagiE.innerText = pagi
            Q.innerHTML= "Langkah seperti apa untuk bicara dengan Pekora?"
            A.innerHTML= "Ajak kencan buat hari ke-6"
            B.innerHTML= "Ajak kencan buat hari ke-6 dengan malu-malu"
        }
        else if (day==5 && pagi == 'sore') {
            pagi = 'malam';
            document.body.style.backgroundImage = "url('./image/kamar.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Maen Among Us dengan komunitas anak gaul?"
            A.innerHTML= "Jelas gue kan pro gamer dan anak gaul"
            B.innerHTML= "Ngantuk cuy"
            if(soc<2){
                aff--
            }else{
                aff++
            }
            affE.innerHTML=aff
        }
        else if(day==5 &&sta<=0){
            window.location = "gameover.html";
        }   
        else if (day==5 && pagi == 'malam') {
            soc++
            socE.innerText = soc;
            sta--
            pagi = 'pagi';
            document.body.style.backgroundImage = "url('./image/pekorakencan.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Kamu mengajak Pekora kencan di hari sabtu, ketika sunset kamu memutuskan untuk menembak pekora, bagaimana hasilnya???"
            A.innerHTML= "Duh deg-degan"
            B.innerHTML= "Duh penasaran"
            day ++
            dayE.innerText = day
            console.log(day,pagi);
            sta+=2
            staE.innerHTML = sta;

        }
        else if (day ==6 && str==3 && aff==5 && int==3 && soc==3) {
            window.location = "true-ending.html" 
        }
        else if (day ==6 && str==4 && aff==5) {
            window.location = "sad-ending1.html" 
            
        }
        else if (day ==6 && soc==4 && aff==5) {
            window.location = "sad-ending1.html" 
        }
        else if (day ==6 && int==4 && aff==5) {
            window.location = "sad-ending1.html" 
        }
        else{
            window.location = "sad-ending2.html" 
        }

    })
    myBtnB.addEventListener('click',function(){
        if(day==1 && pagi == 'pagi'){
            pagi = 'siang';
            document.body.style.backgroundImage = "url('./image/olahraga.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Olahraga?"
            A.innerHTML= "Mari kita kemon"
            B.innerHTML= "Duh pegel badan euy~~"
            
        }
        else if(day==1 && pagi == 'siang'){
            pagi = 'sore';
            document.body.style.backgroundImage = "url('./image/backgroundpekora.png')";
            pagiE.innerText = pagi
            Q.innerHTML= "Langkah seperti apa untuk bicara dengan Pekora?"
            A.innerHTML= "Agresif dong gaskeun cuy"
            B.innerHTML= "Woles lah pelan-pelan"
        }
        else if (day==1 && pagi == 'sore') {
            pagi = 'malam';
            document.body.style.backgroundImage = "url('./image/kamar.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Maen Among Us dengan komunitas anak gaul?"
            A.innerHTML= "Jelas gue kan pro gamer dan anak gaul"
            B.innerHTML= "Ngantuk cuy"
            if(soc>=2){
                aff--
            }else{
                aff++
            }
            affE.innerHTML=aff
        }
        else if (day==1 && pagi == 'malam') {
            pagi = 'pagi';
            document.body.style.backgroundImage = "url('./image/kelas.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Masuk Kelas?"
            A.innerHTML= "Yoi gue kan rajin"
            B.innerHTML= "Males ah"
            day ++
            dayE.innerText = day
            console.log(day,pagi);
            sta+=2
            staE.innerHTML = sta;
        }
        else if(day==2 && pagi == 'pagi'){
            pagi = 'siang';
            document.body.style.backgroundImage = "url('./image/olahraga.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Olahraga?"
            A.innerHTML= "Mari kita kemon"
            B.innerHTML= "Duh pegel badan euy~~"
            
        }
        else if(day==2 && pagi == 'siang'){
            pagi = 'sore';
            document.body.style.backgroundImage = "url('./image/backgroundpekora.png')";
            pagiE.innerText = pagi
            Q.innerHTML= "Langkah seperti apa untuk bicara dengan Pekora?"
            A.innerHTML= "Agresif dong gaskeun cuy"
            B.innerHTML= "Woles lah pelan-pelan"
        }
        else if (day==2 && pagi == 'sore') {
            pagi = 'malam';
            document.body.style.backgroundImage = "url('./image/kamar.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Maen Among Us dengan komunitas anak gaul?"
            A.innerHTML= "Jelas gue kan pro gamer dan anak gaul"
            B.innerHTML= "Ngantuk cuy"
            if(soc>=2){
                aff--
            }else{
                aff++
            }
            affE.innerHTML=aff
        }
        else if (day==2 && pagi == 'malam') {
            pagi = 'pagi';
            document.body.style.backgroundImage = "url('./image/kelas.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Masuk Kelas?"
            A.innerHTML= "Yoi gue kan rajin"
            B.innerHTML= "Males ah"
            day ++
            dayE.innerText = day
            console.log(day,pagi);
            sta+=2
            staE.innerHTML = sta;
        }
        else if(day==3 && pagi == 'pagi'){
            pagi = 'siang';
            document.body.style.backgroundImage = "url('./image/olahraga.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Olahraga?"
            A.innerHTML= "Mari kita kemon"
            B.innerHTML= "Duh pegel badan euy~~"
            
        }
        else if(day==3 && pagi == 'siang'){
            pagi = 'sore';
            document.body.style.backgroundImage = "url('./image/backgroundpekora.png')";
            pagiE.innerText = pagi
            Q.innerHTML= "Langkah seperti apa untuk bicara dengan Pekora?"
            A.innerHTML= "Agresif dong gaskeun cuy"
            B.innerHTML= "Woles lah pelan-pelan"
        }
        else if (day==3 && pagi == 'sore') {
            pagi = 'malam';
            document.body.style.backgroundImage = "url('./image/kamar.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Maen Among Us dengan komunitas anak gaul?"
            A.innerHTML= "Jelas gue kan pro gamer dan anak gaul"
            B.innerHTML= "Ngantuk cuy"
            if(soc>=2){
                aff--
            }else{
                aff++
            }
            affE.innerHTML=aff
        }
        else if (day==3 && pagi == 'malam') {
            pagi = 'pagi';
            document.body.style.backgroundImage = "url('./image/kelas.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Masuk Kelas?"
            A.innerHTML= "Yoi gue kan rajin"
            B.innerHTML= "Males ah"
            day ++
            dayE.innerText = day
            console.log(day,pagi);
            sta+=2
            staE.innerHTML = sta;
        }
        else if(day==4 && pagi == 'pagi'){
            pagi = 'siang';
            document.body.style.backgroundImage = "url('./image/olahraga.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Olahraga?"
            A.innerHTML= "Mari kita kemon"
            B.innerHTML= "Duh pegel badan euy~~"
            
        }
        else if(day==4 && pagi == 'siang'){
            pagi = 'sore';
            document.body.style.backgroundImage = "url('./image/backgroundpekora.png')";
            pagiE.innerText = pagi
            Q.innerHTML= "Langkah seperti apa untuk bicara dengan Pekora?"
            A.innerHTML= "Agresif dong gaskeun cuy"
            B.innerHTML= "Woles lah pelan-pelan"
        }
        else if (day==4 && pagi == 'sore') {
            pagi = 'malam';
            document.body.style.backgroundImage = "url('./image/kamar.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Maen Among Us dengan komunitas anak gaul?"
            A.innerHTML= "Jelas gue kan pro gamer dan anak gaul"
            B.innerHTML= "Ngantuk cuy"
            if(soc>=2){
                aff--
            }else{
                aff++
            }
            affE.innerHTML=aff
        }
        else if (day==4 && pagi == 'malam') {
            pagi = 'pagi';
            document.body.style.backgroundImage = "url('./image/kelas.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Masuk Kelas?"
            A.innerHTML= "Yoi gue kan rajin"
            B.innerHTML= "Males ah"
            day ++
            dayE.innerText = day
            console.log(day,pagi);
            sta+=2
            staE.innerHTML = sta;
        }
        else if(day==5 && pagi == 'pagi'){
            pagi = 'siang';
            document.body.style.backgroundImage = "url('./image/olahraga.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Olahraga?"
            A.innerHTML= "Mari kita kemon"
            B.innerHTML= "Duh pegel badan euy~~"
            
        }
        else if(day==5 && pagi == 'siang'){
            pagi = 'sore';
            document.body.style.backgroundImage = "url('./image/backgroundpekora.png')";
            pagiE.innerText = pagi
            Q.innerHTML= "Langkah seperti apa untuk bicara dengan Pekora?"
            A.innerHTML= "Ajak kencan buat hari ke-6"
            B.innerHTML= "Ajak kencan buat hari ke-6 dengan malu-malu"
        }
        else if (day==5 && pagi == 'sore') {
            pagi = 'malam';
            document.body.style.backgroundImage = "url('./image/kamar.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Maen Among Us dengan komunitas anak gaul?"
            A.innerHTML= "Jelas gue kan pro gamer dan anak gaul"
            B.innerHTML= "Ngantuk cuy"
            if(soc>=2){
                aff--
            }else{
                aff++
            }
            affE.innerHTML=aff
        }
        else if (day==5 && pagi == 'malam') {
            pagi = 'pagi';
            document.body.style.backgroundImage = "url('./image/pekorakencan.jpg')";
            pagiE.innerText = pagi
            Q.innerHTML= "Kamu mengajak Pekora kencan di hari sabtu, ketika sunset kamu memutuskan untuk menembak pekora, bagaimana hasilnya???"
            A.innerHTML= "Duh deg-degan"
            B.innerHTML= "Duh penasaran"
            day ++
            dayE.innerText = day
            console.log(day,pagi);
            sta+=2
            staE.innerHTML = sta;
        }
        else if (day ==6 && str==3 && aff==5 && int==3 && soc==3) {
            window.location = "true-ending.html" 
        }
        else if (day ==6 && str==4 && aff==5) {
            window.location = "sad-ending1.html" 
            
        }
        else if (day ==6 && soc==4 && aff==5) {
            window.location = "sad-ending1.html" 
        }
        else if (day ==6 && int==4 && aff==5) {
            window.location = "sad-ending1.html" 
        }
        else{
            window.location = "sad-ending2.html" 
        }
    })
    
    

