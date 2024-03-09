---
id: e8ab6ffd-5ef2-46f3-ba2a-f54a7832f427
blueprint: writing
title: 'CSS Grid ve Flexbox Kullanım Senaryoları'
author: 095d9275-f54a-40d1-81a1-067635a72460
updated_by: 095d9275-f54a-40d1-81a1-067635a72460
updated_at: 1709939788
summary: 'Merhabalar, bu yazımda CSS yazarken ne zaman flexbox ne zaman grid kullanmalıyız sorusuna cevap vermeye çalışacağım.'
code:
  code: null
  mode: htmlmixed
date: '2023-08-31'
tags:
  - css
---
Merhabalar, bu yazımda CSS yazarken ne zaman flexbox ne zaman grid kullanmalıyız sorusuna cevap vermeye çalışacağım.

Dürüst olmak gerekirse ben dahil çoğu kişi ilk öğrendiği yapıyı kullanıyor. Haliyle diğerine göz ucuyla bakıyor veya karmaşık geldiği için tabiri caizse hiç bulaşmıyor diyebilirim. Genelde flexbox öğrenilir nedeni ise grid flexbox’a göre başlangıç aşamasında karmaşık gözükmesidir.

Öncelikle kavramlara ve örneklere geçmeden, CSS grid ve flexbox arasındaki temel farktan bahsetmek istiyorum çünkü yazı genelinde örneklerle karşılaştırmalar yapacağım.

CSS Grid çok boyutlu bir düzen modülüdür, yani sütunları ve satırları vardır. Flexbox ise alt öğelerini sütun veya satır olarak düzenleyebilir, ancak her ikisini birden düzenleyemez.
> En kısa tabirle “Flexbox tek boyutlu grid ise çok boyutludur” diyebiliriz.

<img src='/assets/writing/grid-vs-flex/flex-grid.webp' alt='Kullanım Rehberi'/> 

Yukarıdaki görselde de göründüğü gibi Flexbox satır içi bir öğe listesi düzenlerken, grid yapısı onları bir sütun ve satır halinde kullanabilmemize olanak sağladı. Flexbox ise öğeleri bir satırda hizalamak için kullanılır. Tabii istersek bunu bir sütun da yapabilirdik. Demem o ki yalnızca tek boyutlu hizalama yapabildik.

**Genel kullanım mantığını ve en temel farkını anladık peki nasıl karar vereceğiz ?**

Başlangıç aşamasında seçim yapmak zor gelse de iki temel soruyu sorarak hangi yöntemi kullanacağımızı seçebiliriz.

- Bileşenin alt öğeleri (children) nasıl görüntülenir? Sadece satır içi mi yoksa sütunlar ve satırlar olarak mı?
- Bileşenin çeşitli ekran boyutlarında nasıl çalışması bekleniyor?

Eğer içeriğiniz tüm alt öğelerini satır içi olarak gösteriyorsa, büyük olasılıkla flexbox kullanımı en iyi çözümdür. Ancak, satır ve sütunları bir arada görüyorsanız, grid kullanmak daha doğru bir çözüm olacaktır. En temel kullanımı yine aşağıdaki görseldeki gibidir.


<img src='/assets/writing/grid-vs-flex/differences.webp' alt='Temel farklılıkları anlamak için şablon'/> 

Temel farkı öğrendiğimiz için örnekleri kafamızda daha rahat oluşturabiliriz.
Şimdi bireysel olarak devam ederek Grid kullanımını da ele alıp örneklerle pekiştirelim. Bir web sitesi hayal edelim. Bu sitenin olmazsa olmazı bir iletişim sayfasıdır diyebiliriz. Bu sayfa bize uygun bir grid kullanım örneği sunmaktadır. Genelde bu tasarımlarda, grid yapısını iki kez kullanabiliriz, ilk kullanım alanı iki alana bölmektir. Bir alanda iletişim bilgileri yer alırken diğer alanda ise genelde bir form alanı bulunur. Yine başka bir örnek verecek olursam diyelim bir doküman sayfasına girdiniz genelde bizi bir sidebar ve main alanı karşılar. Burada ilgili aramalar yaparız ve içerik bize main alanında gözükür. Tüm bu yaklaşımlar grid kullanımına verebilecek örneklerdir.

<img src='/assets/writing/grid-vs-flex/grid-example.webp' alt='Grid Kullanım Örneği'/> 
Flexbox kullanımına geçecek olursak hepimizin gündelik hayatta kullandığı sosyal medya platformlarından örnek vermek istiyorum.

Her zaman karşılaştığımız bir modal yapısı (Bu gönderiyi silmek istiyor musun ?), bir gönderiye yorum atma alanı veya sosyal medya akışımızdaki gördüğümüz görsel, görseli kimin attığı, açıklama metninden oluşan bir post yapısı flexbox kullanıma verilebilecek en iyi örneklerdir.


<img src='/assets/writing/grid-vs-flex/flex-example.webp' alt='Flex kullanım örneği'/> 
Unutmadan söylemek istiyorum bu yaklaşımlarda hiç bir zaman keskin kurallar yoktur, her ikisini de kullanabiliriz. Sizleri de çok fazla sıkmadan ikisinin birlikte kullanıma örneklerinden bahsedip bitirmek istiyorum.

Her iki yaklaşımın bir arada kullanıldığı örnekleri düşündüğümde aklımda hemen hem flexbox hem de grid yapısının birden çok kez kullanım senaryosunun mevcut olduğu Twitter geldi. Aşağıdaki görselin çok basit şablon olduğunu düşündüğümüzde bile sayısız kez flexbox ve grid kullanıldığını görebiliyoruz. Artık sizde hangi yapılar nasıl kurgulanmış kafanızda canlandırabilirsiniz.

<img src='/assets/writing/grid-vs-flex/twitter-layout.webp' alt='Birlikte kullanım örneği'/>