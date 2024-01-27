import "./TripApp.css";
import TripData from "./TripData";


function Trip() {
  return (
    <div className="trip">
      <h1>Haberler</h1>
      {/* <p>Meram Belediyesi Haberleri</p> */}
      <div className="tripcard">
         <TripData 
            image={"	https://www.meram.bel.tr/upload/medya/1_327.jpg"}
            heading="2023’ÜN EN MİSAFİRPERVERİ; ‘TENZİLE ANA HASTA KONUKEVİ’"
            text="Sosyal belediyeciliğin en güzel örneklerinden biri olan Meram Belediyesi Tenzile Ana Hasta Konukevi hasta ve hasta yakınlarını ağırlamaya devam ediyor. Otel konforunda hizmet veren Tenzile Ana Hasta Konukevi 2023 yılı içinde yaklaşık 17 bin, bugüne kadar ise yaklaşık 155 bin misafir ağırlayarak bu alanda ulaşılması zor bir başarıya imza attı."
         />
         <TripData 
            image={"	https://www.meram.bel.tr/upload/medya/1_323.jpg"}
            heading="20232ün En Gözdesi; Kızlar Kayası"
            text="Meram Belediyesi tarafından oluşturulan ‘Yeni Turizm Rotası’nın en nadide parçası Kızlar Kayası, 2023’ün en gözde mekanlarından biri oldu. Kızlar Kayası’nı kısa zamanda on binlerce kişinin ziyaret ettiğini söyleyen Meram Belediye Başkanı Mustafa Kavuş, “Kızlar Kayası, pek çok hikayeye konu oldu. Ama artık hemşehrilerimiz kendi hikayelerini yazacak dedik, öyle de oldu” diye konuştu."
         />
         <TripData 
            image={"	https://www.meram.bel.tr/upload/medya/DJI_0002_1200.jpg"}
            heading=" Yenice Parkı"
            text="YENİCE PARKI 10,336 TOPLAM İNŞAAT ALANI OLUP İÇERİSİNDE ; - KAFEMERAM - SÜS HAVUZLARI -YEŞİL ALANLAR -KAMERİYELER -ÇOCUK OYUN ALANLARI VE FİTNESS GRUPLARI -HIZ DÖNENCESİ -YÜRÜYÜŞ YOLLARI BULUNMAKTADIR"
         />
       </div>
    </div>
  );
}

export default Trip;