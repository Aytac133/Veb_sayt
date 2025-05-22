document.getElementById("backBtn").addEventListener("click", function() {
  window.location.href = "web.html"; // əvvəlki üzvlər səhifəsinə qayıdır
});
const details = {
  ders: {
    title: "Dərs Materialları",
    content: "Burada siz Riyaziyyat, Fizika, Kimya və digər fənlər üzrə dərs mövzuları, testlər və izahlı materiallara çıxış əldə edə bilərsiniz."
  },
  kitabxana: {
    title: "Elektron Kitabxana",
    content: "Bu bölmədə siz elektron kitablar, akademik jurnallar və elmi məqalələrlə tanış ola bilərsiniz."
  },
  teqvim: {
    title: "Təqvim və Planlaşdırıcı",
    content: "Dərslər, imtahanlar və tapşırıqlar üçün təqvim yarat və vaxtını səmərəli planlaşdır."
  },
  staj: {
    title: "Staj və Karyera İmkanları",
    content: "Tələbələr üçün təcrübə proqramları, staj imkanları və karyera inkişafı üçün faydalı resurslar."
  },
  heyat: {
    title: "Tələbə Həyatı",
    content: "Tələbə tədbirləri, könüllü fəaliyyətlər və sosial həyatla bağlı məlumatlar bu bölmədədir."
  }
};

function showDetail(key) {
  document.getElementById("resources").style.display = "none";
  document.getElementById("detailView").style.display = "block";

  document.getElementById("detailTitle").innerText = details[key].title;
  document.getElementById("detailContent").innerText = details[key].content;
}

function backToList() {
  document.getElementById("resources").style.display = "flex";
  document.getElementById("detailView").style.display = "none";
}
