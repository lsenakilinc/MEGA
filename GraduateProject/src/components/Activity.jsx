import "./ActivityApp.css"
import ActivityData from "./ActivityData"
import Mountain1 from  "../assets/1.jpg"
import Mountain2 from  "../assets/2.jpg"
import Mountain3 from  "../assets/3.jpg"
import  Mountain4 from  "../assets/4.jpg"

const Activity = () =>{
    return(
        <div className="activity">
            <h1>Meram Belediyesi Faaliyetleri</h1>
            {/* <p>En Son Yapılan Faaliyetler</p> */}

            <ActivityData
            className="first-act"
            heading="DOSD MERAM’DA AİLELERE ‘BİZ’ OLABİLME YOLCULUĞU ANLATILDI"
            text="Meram Down Sendromlu Bireyler Yaşam Destek Merkezi DOSD Meram’da, her ay periyodik olarak gerçekleştirilen aile seminerleri çerçevesinde ocak ayının konusu “Erken Çocukluk Dönemi Özel Eğitimde ‘Biz’ Olabilme Yolculuğu” anlatıldı. Özel bireylerin aileleri tarafından bir hayli ilgi gören seminer Necmettin Erbakan Üniversitesi Ahmet Keleşoğlu Eğitim Fakültesi Özel Eğitim Bölümü Zihin Engelliler Eğitimi Anabilim Dalı Öğretim Üyesi Doç. Dr. Rukiye Konuk Er tarafından verildi."
            img1={"	https://www.meram.bel.tr/upload/medya/MRM_8757.jpg"}
            img2={"	https://www.meram.bel.tr/upload/medya/HE5B2475.jpg"}
            />

            <ActivityData
            className="first-act-reverse"
            heading="BÜYÜK LARENDE DÖNÜŞÜMÜNDE YENİ İŞYERLERİ İÇİN KURALAR ÇEKİLDİ"
            text="Türkiye’de yürütülen en büyük ihya projelerinden Darü’l-Mülk Projesi kapsamında Konya Büyükşehir Belediyesi ve Meram Belediyesi iş birliğiyle hayata geçirilen “Büyük Larende Dönüşümü”nde, tamamlanan yeni iş yerleri için kuralar çekildi.

            Konya Büyükşehir Belediye Başkanı Uğur İbrahim Altay, “İnşallah dükkanlar taşındıktan sonra kale surlarının ortaya çıkarılması ve Konya'nın kadim tarihine yakışır bir imzayı Larende Caddesi'nde Meram Belediyemizle birlikte atmayı planlıyoruz. Önümüzde işimiz, arkamızda Konyalılar. Gece gündüz demeden gayret ediyoruz. İnşallah sizlerin de desteğiyle önümüzdeki 5 yılda da Konya’ya layık olacak, Konya’nın geleceğini inşa edecek işleri beraber tamamlayacağız. Büyük Larende Dönüşümü’nün şehrimize hayırlı olmasını temenni ediyoruz” dedi. Meram Belediye Başkanı Mustafa Kavuş, Konya Büyükşehir Belediyesi’nin özel destekleriyle Türkiye’de örneği az olan bir uygulamayla hem Larende bölgesinde dönüşümün sağlanmış olacağını hem de esnafların yeni dükkanlara kavuşacağını ifade etti."
            img1={"	https://www.meram.bel.tr/upload/medya/1-12_26.jpg"}
            img2={"	https://www.meram.bel.tr/upload/medya/1-8_112.jpg"}
            />
        </div>

    )
}

export default Activity