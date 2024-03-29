const solSearchUrls = [
  "*://www.google.com/search?q=*.sol&*",
  "*://www.google.ad/search?q=*.sol&*",
  "*://www.google.ae/search?q=*.sol&*",
  "*://www.google.com.af/search?q=*.sol&*",
  "*://www.google.com.ag/search?q=*.sol&*",
  "*://www.google.com.ai/search?q=*.sol&*",
  "*://www.google.al/search?q=*.sol&*",
  "*://www.google.am/search?q=*.sol&*",
  "*://www.google.co.ao/search?q=*.sol&*",
  "*://www.google.com.ar/search?q=*.sol&*",
  "*://www.google.as/search?q=*.sol&*",
  "*://www.google.at/search?q=*.sol&*",
  "*://www.google.com.au/search?q=*.sol&*",
  "*://www.google.az/search?q=*.sol&*",
  "*://www.google.ba/search?q=*.sol&*",
  "*://www.google.com.bd/search?q=*.sol&*",
  "*://www.google.be/search?q=*.sol&*",
  "*://www.google.bf/search?q=*.sol&*",
  "*://www.google.bg/search?q=*.sol&*",
  "*://www.google.com.bh/search?q=*.sol&*",
  "*://www.google.bi/search?q=*.sol&*",
  "*://www.google.bj/search?q=*.sol&*",
  "*://www.google.com.bn/search?q=*.sol&*",
  "*://www.google.com.bo/search?q=*.sol&*",
  "*://www.google.com.br/search?q=*.sol&*",
  "*://www.google.bs/search?q=*.sol&*",
  "*://www.google.bt/search?q=*.sol&*",
  "*://www.google.co.bw/search?q=*.sol&*",
  "*://www.google.by/search?q=*.sol&*",
  "*://www.google.com.bz/search?q=*.sol&*",
  "*://www.google.ca/search?q=*.sol&*",
  "*://www.google.cd/search?q=*.sol&*",
  "*://www.google.cf/search?q=*.sol&*",
  "*://www.google.cg/search?q=*.sol&*",
  "*://www.google.ch/search?q=*.sol&*",
  "*://www.google.ci/search?q=*.sol&*",
  "*://www.google.co.ck/search?q=*.sol&*",
  "*://www.google.cl/search?q=*.sol&*",
  "*://www.google.cm/search?q=*.sol&*",
  "*://www.google.cn/search?q=*.sol&*",
  "*://www.google.com.co/search?q=*.sol&*",
  "*://www.google.co.cr/search?q=*.sol&*",
  "*://www.google.com.cu/search?q=*.sol&*",
  "*://www.google.cv/search?q=*.sol&*",
  "*://www.google.com.cy/search?q=*.sol&*",
  "*://www.google.cz/search?q=*.sol&*",
  "*://www.google.de/search?q=*.sol&*",
  "*://www.google.dj/search?q=*.sol&*",
  "*://www.google.dk/search?q=*.sol&*",
  "*://www.google.dm/search?q=*.sol&*",
  "*://www.google.com.do/search?q=*.sol&*",
  "*://www.google.dz/search?q=*.sol&*",
  "*://www.google.com.ec/search?q=*.sol&*",
  "*://www.google.ee/search?q=*.sol&*",
  "*://www.google.com.eg/search?q=*.sol&*",
  "*://www.google.es/search?q=*.sol&*",
  "*://www.google.com.et/search?q=*.sol&*",
  "*://www.google.fi/search?q=*.sol&*",
  "*://www.google.com.fj/search?q=*.sol&*",
  "*://www.google.fm/search?q=*.sol&*",
  "*://www.google.fr/search?q=*.sol&*",
  "*://www.google.ga/search?q=*.sol&*",
  "*://www.google.ge/search?q=*.sol&*",
  "*://www.google.gg/search?q=*.sol&*",
  "*://www.google.com.gh/search?q=*.sol&*",
  "*://www.google.com.gi/search?q=*.sol&*",
  "*://www.google.gl/search?q=*.sol&*",
  "*://www.google.gm/search?q=*.sol&*",
  "*://www.google.gr/search?q=*.sol&*",
  "*://www.google.com.gt/search?q=*.sol&*",
  "*://www.google.gy/search?q=*.sol&*",
  "*://www.google.com.hk/search?q=*.sol&*",
  "*://www.google.hn/search?q=*.sol&*",
  "*://www.google.hr/search?q=*.sol&*",
  "*://www.google.ht/search?q=*.sol&*",
  "*://www.google.hu/search?q=*.sol&*",
  "*://www.google.co.id/search?q=*.sol&*",
  "*://www.google.ie/search?q=*.sol&*",
  "*://www.google.co.il/search?q=*.sol&*",
  "*://www.google.im/search?q=*.sol&*",
  "*://www.google.co.in/search?q=*.sol&*",
  "*://www.google.iq/search?q=*.sol&*",
  "*://www.google.is/search?q=*.sol&*",
  "*://www.google.it/search?q=*.sol&*",
  "*://www.google.je/search?q=*.sol&*",
  "*://www.google.com.jm/search?q=*.sol&*",
  "*://www.google.jo/search?q=*.sol&*",
  "*://www.google.co.jp/search?q=*.sol&*",
  "*://www.google.co.ke/search?q=*.sol&*",
  "*://www.google.com.kh/search?q=*.sol&*",
  "*://www.google.ki/search?q=*.sol&*",
  "*://www.google.kg/search?q=*.sol&*",
  "*://www.google.co.kr/search?q=*.sol&*",
  "*://www.google.com.kw/search?q=*.sol&*",
  "*://www.google.kz/search?q=*.sol&*",
  "*://www.google.la/search?q=*.sol&*",
  "*://www.google.com.lb/search?q=*.sol&*",
  "*://www.google.li/search?q=*.sol&*",
  "*://www.google.lk/search?q=*.sol&*",
  "*://www.google.co.ls/search?q=*.sol&*",
  "*://www.google.lt/search?q=*.sol&*",
  "*://www.google.lu/search?q=*.sol&*",
  "*://www.google.lv/search?q=*.sol&*",
  "*://www.google.com.ly/search?q=*.sol&*",
  "*://www.google.co.ma/search?q=*.sol&*",
  "*://www.google.md/search?q=*.sol&*",
  "*://www.google.me/search?q=*.sol&*",
  "*://www.google.mg/search?q=*.sol&*",
  "*://www.google.mk/search?q=*.sol&*",
  "*://www.google.ml/search?q=*.sol&*",
  "*://www.google.com.mm/search?q=*.sol&*",
  "*://www.google.mn/search?q=*.sol&*",
  "*://www.google.ms/search?q=*.sol&*",
  "*://www.google.com.mt/search?q=*.sol&*",
  "*://www.google.mu/search?q=*.sol&*",
  "*://www.google.mv/search?q=*.sol&*",
  "*://www.google.mw/search?q=*.sol&*",
  "*://www.google.com.mx/search?q=*.sol&*",
  "*://www.google.com.my/search?q=*.sol&*",
  "*://www.google.co.mz/search?q=*.sol&*",
  "*://www.google.com.na/search?q=*.sol&*",
  "*://www.google.com.ng/search?q=*.sol&*",
  "*://www.google.com.ni/search?q=*.sol&*",
  "*://www.google.ne/search?q=*.sol&*",
  "*://www.google.nl/search?q=*.sol&*",
  "*://www.google.no/search?q=*.sol&*",
  "*://www.google.com.np/search?q=*.sol&*",
  "*://www.google.nr/search?q=*.sol&*",
  "*://www.google.nu/search?q=*.sol&*",
  "*://www.google.co.nz/search?q=*.sol&*",
  "*://www.google.com.om/search?q=*.sol&*",
  "*://www.google.com.pa/search?q=*.sol&*",
  "*://www.google.com.pe/search?q=*.sol&*",
  "*://www.google.com.pg/search?q=*.sol&*",
  "*://www.google.com.ph/search?q=*.sol&*",
  "*://www.google.com.pk/search?q=*.sol&*",
  "*://www.google.pl/search?q=*.sol&*",
  "*://www.google.pn/search?q=*.sol&*",
  "*://www.google.com.pr/search?q=*.sol&*",
  "*://www.google.ps/search?q=*.sol&*",
  "*://www.google.pt/search?q=*.sol&*",
  "*://www.google.com.py/search?q=*.sol&*",
  "*://www.google.com.qa/search?q=*.sol&*",
  "*://www.google.ro/search?q=*.sol&*",
  "*://www.google.ru/search?q=*.sol&*",
  "*://www.google.rw/search?q=*.sol&*",
  "*://www.google.com.sa/search?q=*.sol&*",
  "*://www.google.com.sb/search?q=*.sol&*",
  "*://www.google.sc/search?q=*.sol&*",
  "*://www.google.se/search?q=*.sol&*",
  "*://www.google.com.sg/search?q=*.sol&*",
  "*://www.google.sh/search?q=*.sol&*",
  "*://www.google.si/search?q=*.sol&*",
  "*://www.google.sk/search?q=*.sol&*",
  "*://www.google.com.sl/search?q=*.sol&*",
  "*://www.google.sn/search?q=*.sol&*",
  "*://www.google.so/search?q=*.sol&*",
  "*://www.google.sm/search?q=*.sol&*",
  "*://www.google.sr/search?q=*.sol&*",
  "*://www.google.st/search?q=*.sol&*",
  "*://www.google.com.sv/search?q=*.sol&*",
  "*://www.google.td/search?q=*.sol&*",
  "*://www.google.tg/search?q=*.sol&*",
  "*://www.google.co.th/search?q=*.sol&*",
  "*://www.google.com.tj/search?q=*.sol&*",
  "*://www.google.tl/search?q=*.sol&*",
  "*://www.google.tm/search?q=*.sol&*",
  "*://www.google.tn/search?q=*.sol&*",
  "*://www.google.to/search?q=*.sol&*",
  "*://www.google.com.tr/search?q=*.sol&*",
  "*://www.google.tt/search?q=*.sol&*",
  "*://www.google.com.tw/search?q=*.sol&*",
  "*://www.google.co.tz/search?q=*.sol&*",
  "*://www.google.com.ua/search?q=*.sol&*",
  "*://www.google.co.ug/search?q=*.sol&*",
  "*://www.google.co.uk/search?q=*.sol&*",
  "*://www.google.com.uy/search?q=*.sol&*",
  "*://www.google.co.uz/search?q=*.sol&*",
  "*://www.google.com.vc/search?q=*.sol&*",
  "*://www.google.co.ve/search?q=*.sol&*",
  "*://www.google.vg/search?q=*.sol&*",
  "*://www.google.co.vi/search?q=*.sol&*",
  "*://www.google.com.vn/search?q=*.sol&*",
  "*://www.google.vu/search?q=*.sol&*",
  "*://www.google.ws/search?q=*.sol&*",
  "*://www.google.rs/search?q=*.sol&*",
  "*://www.google.co.za/search?q=*.sol&*",
  "*://www.google.co.zm/search?q=*.sol&*",
  "*://www.google.co.zw/search?q=*.sol&*",
  "*://www.google.cat/search?q=*.sol&*",
  "*://www.google.com/search?q=*.sol%2F*&*",
  "*://www.google.ad/search?q=*.sol%2F*&*",
  "*://www.google.ae/search?q=*.sol%2F*&*",
  "*://www.google.com.af/search?q=*.sol%2F*&*",
  "*://www.google.com.ag/search?q=*.sol%2F*&*",
  "*://www.google.com.ai/search?q=*.sol%2F*&*",
  "*://www.google.al/search?q=*.sol%2F*&*",
  "*://www.google.am/search?q=*.sol%2F*&*",
  "*://www.google.co.ao/search?q=*.sol%2F*&*",
  "*://www.google.com.ar/search?q=*.sol%2F*&*",
  "*://www.google.as/search?q=*.sol%2F*&*",
  "*://www.google.at/search?q=*.sol%2F*&*",
  "*://www.google.com.au/search?q=*.sol%2F*&*",
  "*://www.google.az/search?q=*.sol%2F*&*",
  "*://www.google.ba/search?q=*.sol%2F*&*",
  "*://www.google.com.bd/search?q=*.sol%2F*&*",
  "*://www.google.be/search?q=*.sol%2F*&*",
  "*://www.google.bf/search?q=*.sol%2F*&*",
  "*://www.google.bg/search?q=*.sol%2F*&*",
  "*://www.google.com.bh/search?q=*.sol%2F*&*",
  "*://www.google.bi/search?q=*.sol%2F*&*",
  "*://www.google.bj/search?q=*.sol%2F*&*",
  "*://www.google.com.bn/search?q=*.sol%2F*&*",
  "*://www.google.com.bo/search?q=*.sol%2F*&*",
  "*://www.google.com.br/search?q=*.sol%2F*&*",
  "*://www.google.bs/search?q=*.sol%2F*&*",
  "*://www.google.bt/search?q=*.sol%2F*&*",
  "*://www.google.co.bw/search?q=*.sol%2F*&*",
  "*://www.google.by/search?q=*.sol%2F*&*",
  "*://www.google.com.bz/search?q=*.sol%2F*&*",
  "*://www.google.ca/search?q=*.sol%2F*&*",
  "*://www.google.cd/search?q=*.sol%2F*&*",
  "*://www.google.cf/search?q=*.sol%2F*&*",
  "*://www.google.cg/search?q=*.sol%2F*&*",
  "*://www.google.ch/search?q=*.sol%2F*&*",
  "*://www.google.ci/search?q=*.sol%2F*&*",
  "*://www.google.co.ck/search?q=*.sol%2F*&*",
  "*://www.google.cl/search?q=*.sol%2F*&*",
  "*://www.google.cm/search?q=*.sol%2F*&*",
  "*://www.google.cn/search?q=*.sol%2F*&*",
  "*://www.google.com.co/search?q=*.sol%2F*&*",
  "*://www.google.co.cr/search?q=*.sol%2F*&*",
  "*://www.google.com.cu/search?q=*.sol%2F*&*",
  "*://www.google.cv/search?q=*.sol%2F*&*",
  "*://www.google.com.cy/search?q=*.sol%2F*&*",
  "*://www.google.cz/search?q=*.sol%2F*&*",
  "*://www.google.de/search?q=*.sol%2F*&*",
  "*://www.google.dj/search?q=*.sol%2F*&*",
  "*://www.google.dk/search?q=*.sol%2F*&*",
  "*://www.google.dm/search?q=*.sol%2F*&*",
  "*://www.google.com.do/search?q=*.sol%2F*&*",
  "*://www.google.dz/search?q=*.sol%2F*&*",
  "*://www.google.com.ec/search?q=*.sol%2F*&*",
  "*://www.google.ee/search?q=*.sol%2F*&*",
  "*://www.google.com.eg/search?q=*.sol%2F*&*",
  "*://www.google.es/search?q=*.sol%2F*&*",
  "*://www.google.com.et/search?q=*.sol%2F*&*",
  "*://www.google.fi/search?q=*.sol%2F*&*",
  "*://www.google.com.fj/search?q=*.sol%2F*&*",
  "*://www.google.fm/search?q=*.sol%2F*&*",
  "*://www.google.fr/search?q=*.sol%2F*&*",
  "*://www.google.ga/search?q=*.sol%2F*&*",
  "*://www.google.ge/search?q=*.sol%2F*&*",
  "*://www.google.gg/search?q=*.sol%2F*&*",
  "*://www.google.com.gh/search?q=*.sol%2F*&*",
  "*://www.google.com.gi/search?q=*.sol%2F*&*",
  "*://www.google.gl/search?q=*.sol%2F*&*",
  "*://www.google.gm/search?q=*.sol%2F*&*",
  "*://www.google.gr/search?q=*.sol%2F*&*",
  "*://www.google.com.gt/search?q=*.sol%2F*&*",
  "*://www.google.gy/search?q=*.sol%2F*&*",
  "*://www.google.com.hk/search?q=*.sol%2F*&*",
  "*://www.google.hn/search?q=*.sol%2F*&*",
  "*://www.google.hr/search?q=*.sol%2F*&*",
  "*://www.google.ht/search?q=*.sol%2F*&*",
  "*://www.google.hu/search?q=*.sol%2F*&*",
  "*://www.google.co.id/search?q=*.sol%2F*&*",
  "*://www.google.ie/search?q=*.sol%2F*&*",
  "*://www.google.co.il/search?q=*.sol%2F*&*",
  "*://www.google.im/search?q=*.sol%2F*&*",
  "*://www.google.co.in/search?q=*.sol%2F*&*",
  "*://www.google.iq/search?q=*.sol%2F*&*",
  "*://www.google.is/search?q=*.sol%2F*&*",
  "*://www.google.it/search?q=*.sol%2F*&*",
  "*://www.google.je/search?q=*.sol%2F*&*",
  "*://www.google.com.jm/search?q=*.sol%2F*&*",
  "*://www.google.jo/search?q=*.sol%2F*&*",
  "*://www.google.co.jp/search?q=*.sol%2F*&*",
  "*://www.google.co.ke/search?q=*.sol%2F*&*",
  "*://www.google.com.kh/search?q=*.sol%2F*&*",
  "*://www.google.ki/search?q=*.sol%2F*&*",
  "*://www.google.kg/search?q=*.sol%2F*&*",
  "*://www.google.co.kr/search?q=*.sol%2F*&*",
  "*://www.google.com.kw/search?q=*.sol%2F*&*",
  "*://www.google.kz/search?q=*.sol%2F*&*",
  "*://www.google.la/search?q=*.sol%2F*&*",
  "*://www.google.com.lb/search?q=*.sol%2F*&*",
  "*://www.google.li/search?q=*.sol%2F*&*",
  "*://www.google.lk/search?q=*.sol%2F*&*",
  "*://www.google.co.ls/search?q=*.sol%2F*&*",
  "*://www.google.lt/search?q=*.sol%2F*&*",
  "*://www.google.lu/search?q=*.sol%2F*&*",
  "*://www.google.lv/search?q=*.sol%2F*&*",
  "*://www.google.com.ly/search?q=*.sol%2F*&*",
  "*://www.google.co.ma/search?q=*.sol%2F*&*",
  "*://www.google.md/search?q=*.sol%2F*&*",
  "*://www.google.me/search?q=*.sol%2F*&*",
  "*://www.google.mg/search?q=*.sol%2F*&*",
  "*://www.google.mk/search?q=*.sol%2F*&*",
  "*://www.google.ml/search?q=*.sol%2F*&*",
  "*://www.google.com.mm/search?q=*.sol%2F*&*",
  "*://www.google.mn/search?q=*.sol%2F*&*",
  "*://www.google.ms/search?q=*.sol%2F*&*",
  "*://www.google.com.mt/search?q=*.sol%2F*&*",
  "*://www.google.mu/search?q=*.sol%2F*&*",
  "*://www.google.mv/search?q=*.sol%2F*&*",
  "*://www.google.mw/search?q=*.sol%2F*&*",
  "*://www.google.com.mx/search?q=*.sol%2F*&*",
  "*://www.google.com.my/search?q=*.sol%2F*&*",
  "*://www.google.co.mz/search?q=*.sol%2F*&*",
  "*://www.google.com.na/search?q=*.sol%2F*&*",
  "*://www.google.com.ng/search?q=*.sol%2F*&*",
  "*://www.google.com.ni/search?q=*.sol%2F*&*",
  "*://www.google.ne/search?q=*.sol%2F*&*",
  "*://www.google.nl/search?q=*.sol%2F*&*",
  "*://www.google.no/search?q=*.sol%2F*&*",
  "*://www.google.com.np/search?q=*.sol%2F*&*",
  "*://www.google.nr/search?q=*.sol%2F*&*",
  "*://www.google.nu/search?q=*.sol%2F*&*",
  "*://www.google.co.nz/search?q=*.sol%2F*&*",
  "*://www.google.com.om/search?q=*.sol%2F*&*",
  "*://www.google.com.pa/search?q=*.sol%2F*&*",
  "*://www.google.com.pe/search?q=*.sol%2F*&*",
  "*://www.google.com.pg/search?q=*.sol%2F*&*",
  "*://www.google.com.ph/search?q=*.sol%2F*&*",
  "*://www.google.com.pk/search?q=*.sol%2F*&*",
  "*://www.google.pl/search?q=*.sol%2F*&*",
  "*://www.google.pn/search?q=*.sol%2F*&*",
  "*://www.google.com.pr/search?q=*.sol%2F*&*",
  "*://www.google.ps/search?q=*.sol%2F*&*",
  "*://www.google.pt/search?q=*.sol%2F*&*",
  "*://www.google.com.py/search?q=*.sol%2F*&*",
  "*://www.google.com.qa/search?q=*.sol%2F*&*",
  "*://www.google.ro/search?q=*.sol%2F*&*",
  "*://www.google.ru/search?q=*.sol%2F*&*",
  "*://www.google.rw/search?q=*.sol%2F*&*",
  "*://www.google.com.sa/search?q=*.sol%2F*&*",
  "*://www.google.com.sb/search?q=*.sol%2F*&*",
  "*://www.google.sc/search?q=*.sol%2F*&*",
  "*://www.google.se/search?q=*.sol%2F*&*",
  "*://www.google.com.sg/search?q=*.sol%2F*&*",
  "*://www.google.sh/search?q=*.sol%2F*&*",
  "*://www.google.si/search?q=*.sol%2F*&*",
  "*://www.google.sk/search?q=*.sol%2F*&*",
  "*://www.google.com.sl/search?q=*.sol%2F*&*",
  "*://www.google.sn/search?q=*.sol%2F*&*",
  "*://www.google.so/search?q=*.sol%2F*&*",
  "*://www.google.sm/search?q=*.sol%2F*&*",
  "*://www.google.sr/search?q=*.sol%2F*&*",
  "*://www.google.st/search?q=*.sol%2F*&*",
  "*://www.google.com.sv/search?q=*.sol%2F*&*",
  "*://www.google.td/search?q=*.sol%2F*&*",
  "*://www.google.tg/search?q=*.sol%2F*&*",
  "*://www.google.co.th/search?q=*.sol%2F*&*",
  "*://www.google.com.tj/search?q=*.sol%2F*&*",
  "*://www.google.tl/search?q=*.sol%2F*&*",
  "*://www.google.tm/search?q=*.sol%2F*&*",
  "*://www.google.tn/search?q=*.sol%2F*&*",
  "*://www.google.to/search?q=*.sol%2F*&*",
  "*://www.google.com.tr/search?q=*.sol%2F*&*",
  "*://www.google.tt/search?q=*.sol%2F*&*",
  "*://www.google.com.tw/search?q=*.sol%2F*&*",
  "*://www.google.co.tz/search?q=*.sol%2F*&*",
  "*://www.google.com.ua/search?q=*.sol%2F*&*",
  "*://www.google.co.ug/search?q=*.sol%2F*&*",
  "*://www.google.co.uk/search?q=*.sol%2F*&*",
  "*://www.google.com.uy/search?q=*.sol%2F*&*",
  "*://www.google.co.uz/search?q=*.sol%2F*&*",
  "*://www.google.com.vc/search?q=*.sol%2F*&*",
  "*://www.google.co.ve/search?q=*.sol%2F*&*",
  "*://www.google.vg/search?q=*.sol%2F*&*",
  "*://www.google.co.vi/search?q=*.sol%2F*&*",
  "*://www.google.com.vn/search?q=*.sol%2F*&*",
  "*://www.google.vu/search?q=*.sol%2F*&*",
  "*://www.google.ws/search?q=*.sol%2F*&*",
  "*://www.google.rs/search?q=*.sol%2F*&*",
  "*://www.google.co.za/search?q=*.sol%2F*&*",
  "*://www.google.co.zm/search?q=*.sol%2F*&*",
  "*://www.google.co.zw/search?q=*.sol%2F*&*",
  "*://www.google.cat/search?q=*.sol%2F*&*",
  "*://duckduckgo.com/?q=*.sol&*",
  "*://duckduckgo.com/?q=*.sol%2F*",
  "*://search.brave.com/search?q=*.sol&*",
  "*://search.brave.com/search?q=*.sol%2F*",
];

export default solSearchUrls;
