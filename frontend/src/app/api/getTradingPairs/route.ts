import { NextResponse } from "next/server";

export async function GET() {
  // const res = await fetch("https://api.binance.com/api/v3/exchangeInfo"); //My internet is so slow that the api times me out
  // const data = await res.json();
  return NextResponse.json({ data: data });
}

// data.data.symbols
//         .filter((item: { status: string }) => item.status === "TRADING")
//         .map((item: { symbol: string }) => item.symbol)

const data = [
  "ETHBTC",
  "LTCBTC",
  "BNBBTC",
  "NEOBTC",
  "QTUMETH",
  "EOSETH",
  "SNTETH",
  "GASBTC",
  "BNBETH",
  "BTCUSDT",
  "ETHUSDT",
  "LRCBTC",
  "LRCETH",
  "QTUMBTC",
  "ZRXBTC",
  "KNCBTC",
  "IOTABTC",
  "IOTAETH",
  "LINKBTC",
  "LINKETH",
  "XVGETH",
  "MTLBTC",
  "EOSBTC",
  "SNTBTC",
  "ETCETH",
  "ETCBTC",
  "ZECBTC",
  "ZECETH",
  "DASHBTC",
  "DASHETH",
  "REQBTC",
  "VIBBTC",
  "TRXBTC",
  "TRXETH",
  "POWRBTC",
  "POWRETH",
  "XRPBTC",
  "XRPETH",
  "ENJBTC",
  "STORJBTC",
  "BNBUSDT",
  "KMDBTC",
  "NULSBTC",
  "BATBTC",
  "NEOUSDT",
  "LSKBTC",
  "MANABTC",
  "MANAETH",
  "ADXBTC",
  "ADXETH",
  "ADABTC",
  "ADAETH",
  "XLMBTC",
  "XLMETH",
  "LTCETH",
  "LTCUSDT",
  "LTCBNB",
  "ICXBTC",
  "ELFBTC",
  "ELFETH",
  "RLCBTC",
  "RLCETH",
  "PIVXBTC",
  "STEEMBTC",
  "STEEMETH",
  "ZILBTC",
  "ZILETH",
  "ONTBTC",
  "QTUMUSDT",
  "WANBTC",
  "SYSBTC",
  "ADAUSDT",
  "ADABNB",
  "XRPUSDT",
  "BTCTUSD",
  "ETHTUSD",
  "ZENBTC",
  "EOSUSDT",
  "THETABTC",
  "XRPBNB",
  "TUSDUSDT",
  "IOTAUSDT",
  "XLMUSDT",
  "IOTXBTC",
  "IOTXETH",
  "DATABTC",
  "ONTUSDT",
  "TRXBNB",
  "TRXUSDT",
  "ETCUSDT",
  "ETCBNB",
  "ICXUSDT",
  "SCETH",
  "DENTETH",
  "ARDRBTC",
  "NULSUSDT",
  "HOTETH",
  "VETBTC",
  "VETETH",
  "VETUSDT",
  "VETBNB",
  "RVNBTC",
  "BNBTUSD",
  "XRPTUSD",
  "BNBUSDC",
  "BTCUSDC",
  "ETHUSDC",
  "XRPUSDC",
  "EOSUSDC",
  "XLMUSDC",
  "USDCUSDT",
  "TRXXRP",
  "LINKUSDT",
  "LINKUSDC",
  "LTCUSDC",
  "TRXUSDC",
  "ONGBTC",
  "ONGUSDT",
  "HOTUSDT",
  "ZILUSDT",
  "ZRXUSDT",
  "FETBNB",
  "FETBTC",
  "FETUSDT",
  "BATUSDT",
  "ZECUSDT",
  "IOSTUSDT",
  "CELRBTC",
  "CELRUSDT",
  "ADAUSDC",
  "NEOUSDC",
  "DASHUSDT",
  "THETAUSDT",
  "ENJUSDT",
  "ATOMBTC",
  "ATOMUSDT",
  "ATOMUSDC",
  "PHBBTC",
  "TFUELBTC",
  "TFUELUSDT",
  "ONEBTC",
  "ONEUSDT",
  "ALGOBTC",
  "ALGOUSDT",
  "ALGOUSDC",
  "DOGEBTC",
  "DOGEUSDT",
  "DOGEUSDC",
  "DUSKBTC",
  "DUSKUSDT",
  "ANKRBTC",
  "ANKRUSDT",
  "ONTUSDC",
  "WINBNB",
  "WINUSDT",
  "COSUSDT",
  "MTLUSDT",
  "DENTUSDT",
  "WANUSDT",
  "FUNUSDT",
  "CVCUSDT",
  "WINTRX",
  "CHZBNB",
  "CHZBTC",
  "CHZUSDT",
  "BANDBTC",
  "BANDUSDT",
  "XTZBTC",
  "XTZUSDT",
  "RVNUSDT",
  "HBARBNB",
  "HBARBTC",
  "HBARUSDT",
  "NKNBTC",
  "NKNUSDT",
  "STXBNB",
  "STXBTC",
  "STXUSDT",
  "KAVABTC",
  "KAVAUSDT",
  "ARPABTC",
  "ARPAUSDT",
  "IOTXUSDT",
  "RLCUSDT",
  "CTXCBTC",
  "CTXCUSDT",
  "BCHBNB",
  "BCHBTC",
  "BCHUSDT",
  "BCHUSDC",
  "TROYUSDT",
  "VITEUSDT",
  "FTTUSDT",
  "BTCTRY",
  "BNBTRY",
  "ETHTRY",
  "XRPTRY",
  "USDTTRY",
  "BTCEUR",
  "ETHEUR",
  "BNBEUR",
  "XRPEUR",
  "EURUSDT",
  "OGNBTC",
  "OGNUSDT",
  "LSKUSDT",
  "BNTUSDT",
  "LTOBTC",
  "LTOUSDT",
  "MBLUSDT",
  "COTIBTC",
  "COTIUSDT",
  "STPTBTC",
  "STPTUSDT",
  "BTCZAR",
  "ETHZAR",
  "USDTZAR",
  "DATAUSDT",
  "SOLBNB",
  "SOLBTC",
  "SOLUSDT",
  "CTSIBTC",
  "CTSIUSDT",
  "HIVEBTC",
  "HIVEUSDT",
  "CHRBTC",
  "CHRUSDT",
  "ARDRUSDT",
  "MDTBTC",
  "MDTUSDT",
  "STMXUSDT",
  "KNCUSDT",
  "LRCUSDT",
  "BTCUAH",
  "USDTUAH",
  "COMPBTC",
  "COMPUSDT",
  "SCUSDT",
  "ZENUSDT",
  "SXPBTC",
  "SNXBTC",
  "SNXUSDT",
  "VTHOUSDT",
  "DGBUSDT",
  "SXPUSDT",
  "MKRBTC",
  "MKRUSDT",
  "RUNEBNB",
  "RUNEBTC",
  "DCRUSDT",
  "STORJUSDT",
  "FIOBTC",
  "AVABTC",
  "MANAUSDT",
  "YFIBTC",
  "YFIUSDT",
  "BALUSDT",
  "KMDUSDT",
  "BTCDAI",
  "ETHDAI",
  "USDTDAI",
  "JSTBTC",
  "JSTUSDT",
  "CRVBTC",
  "CRVUSDT",
  "SANDBTC",
  "SANDUSDT",
  "NMRBTC",
  "NMRUSDT",
  "DOTBNB",
  "DOTBTC",
  "DOTUSDT",
  "LUNAUSDT",
  "IDEXBTC",
  "RSRUSDT",
  "PAXGBTC",
  "PAXGUSDT",
  "TRBBTC",
  "TRBUSDT",
  "WBTCBTC",
  "WBTCETH",
  "SUSHIBTC",
  "SUSHIUSDT",
  "KSMBTC",
  "KSMUSDT",
  "EGLDBNB",
  "EGLDBTC",
  "EGLDUSDT",
  "DIABTC",
  "DIAUSDT",
  "RUNEUSDT",
  "FIOUSDT",
  "UMABTC",
  "UMAUSDT",
  "LINKTRY",
  "BELBTC",
  "BELUSDT",
  "WINGUSDT",
  "UNIBTC",
  "UNIUSDT",
  "OXTBTC",
  "OXTUSDT",
  "SUNUSDT",
  "AVAXBNB",
  "AVAXBTC",
  "AVAXUSDT",
  "FLMBTC",
  "FLMUSDT",
  "SCRTBTC",
  "CAKEBNB",
  "SXPTRY",
  "UTKUSDT",
  "XVSBNB",
  "XVSBTC",
  "XVSUSDT",
  "ALPHABTC",
  "ALPHAUSDT",
  "VIDTBTC",
  "BTCBRL",
  "USDTBRL",
  "AAVEBTC",
  "AAVEETH",
  "AAVEUSDT",
  "NEARBNB",
  "NEARBTC",
  "NEARUSDT",
  "FILBTC",
  "FILUSDT",
  "INJBNB",
  "INJBTC",
  "INJUSDT",
  "LINKEUR",
  "AUDIOBTC",
  "AUDIOUSDT",
  "CTKBNB",
  "CTKBTC",
  "CTKUSDT",
  "ETHBRL",
  "DOTEUR",
  "AXSBNB",
  "AXSBTC",
  "AXSUSDT",
  "HARDUSDT",
  "BNBBRL",
  "LTCEUR",
  "SLPETH",
  "ADAEUR",
  "STRAXBTC",
  "STRAXUSDT",
  "ROSEBTC",
  "ROSEUSDT",
  "AVAXTRY",
  "AVAUSDT",
  "XRPBRL",
  "SKLBTC",
  "SKLUSDT",
  "BCHEUR",
  "GLMBTC",
  "LINKBRL",
  "TRXTRY",
  "XLMEUR",
  "GRTBTC",
  "GRTETH",
  "GRTUSDT",
  "JUVUSDT",
  "PSGUSDT",
  "1INCHBTC",
  "1INCHUSDT",
  "OGBTC",
  "OGUSDT",
  "ATMUSDT",
  "ASRUSDT",
  "CELOBTC",
  "CELOUSDT",
  "RIFBTC",
  "RIFUSDT",
  "CHZTRY",
  "XLMTRY",
  "GRTEUR",
  "TRUBTC",
  "TRUUSDT",
  "LTCBRL",
  "CKBUSDT",
  "TWTUSDT",
  "FIROUSDT",
  "DOGEEUR",
  "DOGETRY",
  "DOGEBRL",
  "SFPBTC",
  "SFPUSDT",
  "DOTTRY",
  "DODOBTC",
  "DODOUSDT",
  "CAKEBTC",
  "CAKEUSDT",
  "ACMUSDT",
  "AUCTIONBTC",
  "PHABTC",
  "ADATRY",
  "ADABRL",
  "BADGERBTC",
  "BADGERUSDT",
  "FISBTC",
  "FISUSDT",
  "DOTBRL",
  "HOTTRY",
  "EGLDEUR",
  "OMBTC",
  "OMUSDT",
  "PONDBTC",
  "PONDUSDT",
  "DEGOUSDT",
  "AVAXEUR",
  "ALICEBTC",
  "ALICEUSDT",
  "LINAUSDT",
  "NEOTRY",
  "PERPBTC",
  "PERPUSDT",
  "SUPERBTC",
  "SUPERUSDT",
  "CFXBTC",
  "CFXUSDT",
  "EOSTRY",
  "RVNTRY",
  "TKOUSDT",
  "PUNDIXUSDT",
  "WINEUR",
  "TLMUSDT",
  "BNBUAH",
  "ONTTRY",
  "VETEUR",
  "BARUSDT",
  "FORTHBTC",
  "FORTHUSDT",
  "BAKEUSDT",
  "BURGERUSDT",
  "SLPUSDT",
  "TRXEUR",
  "VETTRY",
  "SHIBUSDT",
  "ICPBTC",
  "ICPUSDT",
  "SHIBEUR",
  "ARBTC",
  "ARUSDT",
  "MASKBNB",
  "MASKUSDT",
  "LPTBTC",
  "LPTBNB",
  "LPTUSDT",
  "ETHUAH",
  "SOLEUR",
  "SHIBBRL",
  "ICPEUR",
  "SHIBTRY",
  "XVGUSDT",
  "ATABTC",
  "ATAUSDT",
  "GTCUSDT",
  "BAKEBTC",
  "SOLTRY",
  "SOLBRL",
  "ERNUSDT",
  "PHAUSDT",
  "MLNBTC",
  "MLNUSDT",
  "GRTTRY",
  "DEXEUSDT",
  "C98USDT",
  "CLVBTC",
  "CLVUSDT",
  "QNTBTC",
  "QNTUSDT",
  "FLOWBTC",
  "FLOWUSDT",
  "MINABTC",
  "MINAUSDT",
  "RAYBNB",
  "RAYUSDT",
  "FARMUSDT",
  "ALPACAUSDT",
  "TLMTRY",
  "QUICKUSDT",
  "MBOXBTC",
  "MBOXUSDT",
  "REQUSDT",
  "GHSTUSDT",
  "WAXPUSDT",
  "WAXPBTC",
  "GNOUSDT",
  "ARPATRY",
  "XECUSDT",
  "ELFUSDT",
  "DYDXUSDT",
  "DYDXBTC",
  "IDEXUSDT",
  "VIDTUSDT",
  "USDPUSDT",
  "GALAUSDT",
  "GALABNB",
  "GALABTC",
  "ILVUSDT",
  "ILVBTC",
  "YGGUSDT",
  "YGGBTC",
  "SYSUSDT",
  "DFUSDT",
  "SOLUSDC",
  "FIDAUSDT",
  "FIDABTC",
  "AGLDBTC",
  "AGLDUSDT",
  "RADUSDT",
  "BETAUSDT",
  "RAREBTC",
  "RAREUSDT",
  "AVAXBRL",
  "AXSETH",
  "SOLETH",
  "SSVBTC",
  "SSVETH",
  "LAZIOTRY",
  "LAZIOUSDT",
  "CHESSUSDT",
  "ADXUSDT",
  "AUCTIONUSDT",
  "SHIBDOGE",
  "BNXUSDT",
  "MANATRY",
  "MOVRBTC",
  "MOVRUSDT",
  "CITYUSDT",
  "ENSBTC",
  "ENSUSDT",
  "DOTETH",
  "SANDTRY",
  "QIUSDT",
  "PORTOUSDT",
  "PORTOTRY",
  "POWRUSDT",
  "AVAXETH",
  "SLPTRY",
  "LRCTRY",
  "GALAETH",
  "JASMYUSDT",
  "AMPUSDT",
  "PYRBTC",
  "PYRUSDT",
  "ALCXUSDT",
  "SANTOSBTC",
  "SANTOSUSDT",
  "SANTOSTRY",
  "BELTRY",
  "DENTTRY",
  "ENJTRY",
  "BICOBTC",
  "BICOUSDT",
  "FLUXBTC",
  "FLUXUSDT",
  "ALICETRY",
  "FXSUSDT",
  "GALABRL",
  "GALATRY",
  "LUNATRY",
  "VOXELUSDT",
  "MINATRY",
  "HIGHUSDT",
  "CVXUSDT",
  "PEOPLEBTC",
  "PEOPLEUSDT",
  "LINKBNB",
  "SPELLUSDT",
  "JOEBTC",
  "JOEUSDT",
  "ATOMETH",
  "EGLDETH",
  "ICPETH",
  "NEARETH",
  "ATOMTRY",
  "ACHBTC",
  "ACHUSDT",
  "IMXBTC",
  "IMXUSDT",
  "GLMRBTC",
  "GLMRUSDT",
  "ICPTRY",
  "ROSEETH",
  "UNIETH",
  "LOKABTC",
  "LOKAUSDT",
  "ROSETRY",
  "SCRTUSDT",
  "API3BTC",
  "API3USDT",
  "BTTCUSDT",
  "BTTCTRY",
  "ACABTC",
  "ACAUSDT",
  "XNOBTC",
  "XNOUSDT",
  "COSTRY",
  "ONETRY",
  "WOOBTC",
  "WOOUSDT",
  "SPELLTRY",
  "AXSTRY",
  "NEARTRY",
  "ALPINETRY",
  "ALPINEUSDT",
  "TUSDT",
  "INJTRY",
  "ASTRUSDT",
  "API3TRY",
  "MBOXTRY",
  "GMTBTC",
  "GMTUSDT",
  "ATOMEUR",
  "GALAEUR",
  "UMATRY",
  "KDABTC",
  "KDAUSDT",
  "APEUSDT",
  "APEBTC",
  "NEAREUR",
  "TWTTRY",
  "APETRY",
  "BSWUSDT",
  "JASMYTRY",
  "BIFIUSDT",
  "GMTEUR",
  "RUNEETH",
  "FILTRY",
  "ZILTRY",
  "GMTTRY",
  "ASTRBTC",
  "BSWTRY",
  "STEEMUSDT",
  "AUDIOTRY",
  "NEXOUSDT",
  "NEXOBTC",
  "REIUSDT",
  "LDOUSDT",
  "LDOBTC",
  "ENSTRY",
  "ALGOTRY",
  "OPBTC",
  "OPUSDT",
  "OPEUR",
  "LEVERUSDT",
  "STORJTRY",
  "OPETH",
  "ETCTRY",
  "FILETH",
  "STGBTC",
  "STGUSDT",
  "ANKRTRY",
  "LUNCUSDT",
  "GMXUSDT",
  "POLYXBTC",
  "POLYXUSDT",
  "APTBTC",
  "APTUSDT",
  "BTCPLN",
  "ETHPLN",
  "APTEUR",
  "APTTRY",
  "OSMOUSDT",
  "HFTBTC",
  "HFTUSDT",
  "PHBUSDT",
  "HOOKUSDT",
  "MAGICBTC",
  "MAGICUSDT",
  "HIFIUSDT",
  "RPLUSDT",
  "PROSUSDT",
  "FETTRY",
  "APTETH",
  "BTCRON",
  "GNSUSDT",
  "SYNUSDT",
  "VIBUSDT",
  "SSVUSDT",
  "LQTYUSDT",
  "LQTYBTC",
  "AMBUSDT",
  "CFXTRY",
  "STXTRY",
  "USTCUSDT",
  "GASUSDT",
  "GLMUSDT",
  "PROMUSDT",
  "QKCUSDT",
  "UFTUSDT",
  "IDBTC",
  "IDUSDT",
  "ARBBTC",
  "ARBUSDT",
  "ARBTUSD",
  "ARBTRY",
  "ARBEUR",
  "IDTRY",
  "SOLTUSD",
  "RDNTUSDT",
  "MAGICTRY",
  "USDTPLN",
  "ACHTRY",
  "XVSTRY",
  "EGLDRON",
  "USDTRON",
  "USDTARS",
  "DOGETUSD",
  "WBTCUSDT",
  "EDUUSDT",
  "EDUTRY",
  "SUIUSDT",
  "SUIBTC",
  "SUIBNB",
  "SUIEUR",
  "SUITRY",
  "AERGOUSDT",
  "PEPEUSDT",
  "FLOKIUSDT",
  "OGTRY",
  "PEPETRY",
  "WBETHETH",
  "ASTUSDT",
  "SNTUSDT",
  "FLOKITRY",
  "CITYTRY",
  "COMBOUSDT",
  "COMBOTRY",
  "LTCTRY",
  "RADTRY",
  "BTCARS",
  "OPTRY",
  "PAXGTRY",
  "MAVBTC",
  "MAVUSDT",
  "PENDLEBTC",
  "PENDLEUSDT",
  "MAVTRY",
  "ARBETH",
  "BCHTRY",
  "XVGTRY",
  "ARKMUSDT",
  "ARKMTRY",
  "ARKMBNB",
  "ARKMBTC",
  "WBETHUSDT",
  "ACATRY",
  "COMPTRY",
  "XECTRY",
  "WLDUSDT",
  "WLDBTC",
  "BNBFDUSD",
  "FDUSDUSDT",
  "WLDTRY",
  "AMPTRY",
  "OGNTRY",
  "BTCFDUSD",
  "ETHFDUSD",
  "ASRTRY",
  "ATMTRY",
  "BARTRY",
  "JUVTRY",
  "PSGTRY",
  "SEIBNB",
  "SEIBTC",
  "SEIFDUSD",
  "SEITRY",
  "SEIUSDT",
  "CYBERBNB",
  "CYBERBTC",
  "CYBERFDUSD",
  "CYBERTRY",
  "CYBERUSDT",
  "LPTTRY",
  "UNITRY",
  "SOLFDUSD",
  "XRPFDUSD",
  "DOGEFDUSD",
  "CYBERETH",
  "ARKUSDT",
  "CREAMUSDT",
  "IQUSDT",
  "ARBFDUSD",
  "FDUSDTRY",
  "SUIFDUSD",
  "NTRNUSDT",
  "NTRNBNB",
  "FILFDUSD",
  "LEVERTRY",
  "LTCFDUSD",
  "ADAFDUSD",
  "TRBTRY",
  "ATOMFDUSD",
  "AVAXFDUSD",
  "BCHFDUSD",
  "DOTFDUSD",
  "LINKFDUSD",
  "NEARFDUSD",
  "STRAXTRY",
  "TIABTC",
  "TIAUSDT",
  "TIATRY",
  "MEMEUSDT",
  "MEMEFDUSD",
  "MEMETRY",
  "ORDIBTC",
  "ORDIUSDT",
  "ORDITRY",
  "EGLDFDUSD",
  "FETFDUSD",
  "INJETH",
  "OPFDUSD",
  "ORDIFDUSD",
  "BEAMXUSDT",
  "ARKTRY",
  "BEAMXTRY",
  "CAKETRY",
  "DYDXFDUSD",
  "PIVXUSDT",
  "RUNEFDUSD",
  "GALAFDUSD",
  "WLDFDUSD",
  "GASTRY",
  "NTRNTRY",
  "VICBTC",
  "VICUSDT",
  "VICTRY",
  "BLURBTC",
  "BLURUSDT",
  "BLURTRY",
  "USTCTRY",
  "DYDXTRY",
  "VANRYUSDT",
  "VANRYBTC",
  "AEURUSDT",
  "AUCTIONFDUSD",
  "LUNCTRY",
  "SUPERTRY",
  "JTOUSDT",
  "JTOFDUSD",
  "JTOTRY",
  "1000SATSUSDT",
  "1000SATSFDUSD",
  "1000SATSTRY",
  "SHIBFDUSD",
  "SANDFDUSD",
  "IOTATRY",
  "INJFDUSD",
  "FIDATRY",
  "BONKUSDT",
  "BONKFDUSD",
  "BONKTRY",
  "ACEUSDT",
  "ACETRY",
  "RARETRY",
  "VANRYTRY",
  "NFPBTC",
  "NFPUSDT",
  "NFPFDUSD",
  "NFPTRY",
  "ARBUSDC",
  "AVAXUSDC",
  "DOTUSDC",
  "INJUSDC",
  "OPUSDC",
  "ORDIUSDC",
  "AIBTC",
  "AIUSDT",
  "AIBNB",
  "AIFDUSD",
  "AITRY",
  "ICPFDUSD",
  "LDOFDUSD",
  "MOVRTRY",
  "XAIBTC",
  "XAIUSDT",
  "XAIFDUSD",
  "XAITRY",
  "SKLTRY",
  "STXFDUSD",
  "TIAFDUSD",
  "MANTABTC",
  "MANTAUSDT",
  "MANTAFDUSD",
  "MANTATRY",
  "ENSFDUSD",
  "ETCFDUSD",
  "SUIUSDC",
  "TIAUSDC",
  "MANTAUSDC",
  "ALTBTC",
  "ALTUSDT",
  "ALTBNB",
  "ALTFDUSD",
  "ALTTRY",
  "APTFDUSD",
  "BLURUSDC",
  "JUPUSDT",
  "JUPFDUSD",
  "JUPTRY",
  "ALTUSDC",
  "SEIUSDC",
  "PYTHBTC",
  "PYTHUSDT",
  "PYTHFDUSD",
  "PYTHTRY",
  "RONINBTC",
  "RONINUSDT",
  "RONINFDUSD",
  "RONINTRY",
  "DYMUSDT",
  "DYMTRY",
  "JUPUSDC",
  "PENDLEFDUSD",
  "PIXELUSDT",
  "PIXELTRY",
  "STRKBTC",
  "STRKUSDT",
  "STRKFDUSD",
  "STRKTRY",
  "FILUSDC",
  "HBARTRY",
  "PENDLETRY",
  "WLDUSDC",
  "CKBTRY",
  "COTITRY",
  "LDOTRY",
  "UNIUSDC",
  "PORTALBTC",
  "PORTALUSDT",
  "PORTALBNB",
  "PORTALFDUSD",
  "PORTALTRY",
  "PDAUSDT",
  "AXLBTC",
  "AXLUSDT",
  "AXLTRY",
  "PEPEFDUSD",
  "PIXELUSDC",
  "STRKUSDC",
  "UNIFDUSD",
  "OMTRY",
  "THETATRY",
  "WIFBTC",
  "WIFUSDT",
  "WIFFDUSD",
  "WIFTRY",
  "PEPEUSDC",
  "SHIBUSDC",
  "THETAFDUSD",
  "ARTRY",
  "METISUSDT",
  "METISTRY",
  "BNBJPY",
  "BTCJPY",
  "ETHJPY",
  "FLOKIFDUSD",
  "GRTFDUSD",
  "NEARUSDC",
  "SNXTRY",
  "AEVOBTC",
  "AEVOUSDT",
  "AEVOFDUSD",
  "AEVOTRY",
  "FETUSDC",
  "EURUSDC",
  "BOMETRY",
  "BOMEUSDT",
  "BOMEFDUSD",
  "ETHFIBTC",
  "ETHFIUSDT",
  "ETHFIFDUSD",
  "ETHFITRY",
  "AAVETRY",
  "ARKMFDUSD",
  "CRVTRY",
  "FETBRL",
  "RAYFDUSD",
  "BONKUSDC",
  "FLOKIUSDC",
  "MKRTRY",
  "RAYTRY",
  "ENABTC",
  "ENAUSDT",
  "ENABNB",
  "ENAFDUSD",
  "ENATRY",
  "MASKTRY",
  "PENDLEUSDC",
  "RDNTTRY",
  "WBTC",
  "WUSDT",
  "WFDUSD",
  "WTRY",
  "BOMEUSDC",
  "JTOUSDC",
  "WIFUSDC",
  "TNSRBTC",
  "TNSRUSDT",
  "TNSRFDUSD",
  "TNSRTRY",
  "SAGABTC",
  "SAGAUSDT",
  "SAGABNB",
  "SAGAFDUSD",
  "SAGATRY",
  "USDTMXN",
  "CKBUSDC",
  "ENAUSDC",
  "ETHFIUSDC",
  "YGGUSDC",
  "USDTCZK",
  "TAOBTC",
  "TAOUSDT",
  "TAOFDUSD",
  "TAOTRY",
  "CFXUSDC",
  "RUNEUSDC",
  "SAGAUSDC",
  "POLYXTRY",
  "OMNIBTC",
  "OMNIUSDT",
  "OMNIFDUSD",
  "OMNITRY",
  "APTUSDC",
  "GALAUSDC",
  "STXUSDC",
  "ICPUSDC",
  "OMNIUSDC",
  "PEPEBRL",
  "YGGTRY",
  "ADAJPY",
  "SHIBJPY",
  "SOLJPY",
  "XRPJPY",
  "REZUSDT",
  "REZTRY",
  "EGLDTRY",
  "PHBTRY",
  "RSRTRY",
  "BBBTC",
  "BBUSDT",
  "BBBNB",
  "BBFDUSD",
  "BBTRY",
  "PEOPLETRY",
  "TRBUSDC",
  "NOTUSDT",
  "NOTFDUSD",
  "NOTTRY",
  "ARKMUSDC",
  "ARUSDC",
  "BBUSDC",
  "CRVUSDC",
  "PEOPLEUSDC",
  "ARFDUSD",
  "PEPEEUR",
  "REZUSDC",
  "USDCTRY",
  "BTCMXN",
  "XRPMXN",
  "ENSUSDC",
  "LDOUSDC",
  "NOTUSDC",
  "NEARBRL",
  "HIGHTRY",
  "PEOPLEFDUSD",
  "TNSRUSDC",
  "USDTCOP",
  "IOBTC",
  "IOUSDT",
  "IOBNB",
  "IOFDUSD",
  "IOTRY",
  "TRUTRY",
  "WIFEUR",
  "ZKBTC",
  "ZKUSDT",
  "ZKFDUSD",
  "ZKTRY",
  "LISTAUSDT",
  "LISTABNB",
  "LISTAFDUSD",
  "LISTATRY",
  "ZROBTC",
  "ZROUSDT",
  "ZROFDUSD",
  "ZROTRY",
  "BAKETRY",
  "WIFBRL",
  "ZKUSDC",
  "ZROUSDC",
  "IOUSDC",
  "1000SATSUSDC",
  "BNXTRY",
  "ETHARS",
  "GUSDT",
  "GTRY",
  "BANANABTC",
  "BANANAUSDT",
  "BANANABNB",
  "BANANAFDUSD",
  "BANANATRY",
  "RENDERBTC",
  "RENDERUSDT",
  "RENDERFDUSD",
  "RENDERUSDC",
  "RENDERTRY",
  "RENDEREUR",
  "RENDERBRL",
  "TONBTC",
  "TONUSDT",
  "TONFDUSD",
  "TONTRY",
  "BONKBRL",
  "NOTEUR",
  "DOGEJPY",
  "NEARJPY",
  "TONUSDC",
  "AAVEFDUSD",
  "DOGSUSDT",
  "DOGSFDUSD",
  "DOGSTRY",
  "EUREURI",
  "EURIUSDT",
  "DOGSBRL",
  "DOGSUSDC",
  "RAREUSDC",
  "SLFBTC",
  "SLFTRY",
  "SLFUSDC",
  "SLFUSDT",
  "AAVEUSDC",
  "SUNTRY",
  "STMXTRY",
  "POLBNB",
  "POLBRL",
  "POLBTC",
  "POLETH",
  "POLEUR",
  "POLFDUSD",
  "POLJPY",
  "POLTRY",
  "POLUSDC",
  "POLUSDT",
  "NEIROUSDT",
  "TURBOUSDT",
  "1MBABYDOGEUSDT",
  "CATIUSDT",
  "CATIFDUSD",
  "CATITRY",
  "1MBABYDOGEFDUSD",
  "1MBABYDOGETRY",
  "BTCEURI",
  "NEIROFDUSD",
  "NEIROTRY",
  "HMSTRUSDT",
  "HMSTRFDUSD",
  "HMSTRTRY",
  "EIGENBTC",
  "EIGENUSDT",
  "EIGENFDUSD",
  "EIGENTRY",
  "NEIROBRL",
  "NEIROEUR",
  "BNSOLSOL",
  "SCRUSDT",
  "SUIBRL",
  "TURBOTRY",
  "BNSOLUSDT",
  "LUMIAUSDT",
  "SCRBTC",
  "SCRFDUSD",
  "SCRTRY",
  "KAIAUSDT",
  "COWUSDT",
  "CETUSUSDT",
  "PNUTUSDT",
  "ACTUSDT",
  "ACTTRY",
  "COWTRY",
  "CETUSTRY",
  "TROYTRY",
  "PNUTTRY",
  "ACTFDUSD",
  "ACTUSDC",
  "NEIROUSDC",
  "PNUTBTC",
  "PNUTFDUSD",
  "PNUTUSDC",
  "USUALUSDT",
  "ACTBRL",
  "ACTEUR",
  "CATIUSDC",
  "ETHEURI",
  "LUMIATRY",
  "PNUTBRL",
  "PNUTEUR",
  "APEFDUSD",
  "FDUSDUSDC",
  "HBARUSDC",
  "OMUSDC",
  "RAYUSDC",
  "TAOUSDC",
  "TURBOFDUSD",
  "THEBTC",
  "THEBNB",
  "THEFDUSD",
  "THETRY",
  "THEUSDT",
  "APEUSDC",
  "BOMEEUR",
  "EIGENUSDC",
  "HBARFDUSD",
  "MEMEUSDC",
  "TROYUSDC",
  "WLDEUR",
  "1MBABYDOGEUSDC",
  "CETUSUSDC",
  "COWUSDC",
  "DYDXUSDC",
  "HMSTRUSDC",
  "TURBOUSDC",
  "ENABRL",
  "EOSFDUSD",
  "KAIAUSDC",
  "SANDUSDC",
  "XLMFDUSD",
  "CHZUSDC",
  "PYTHUSDC",
  "RSRUSDC",
  "RSRFDUSD",
  "WUSDC",
  "XTZUSDC",
  "ACXUSDT",
  "ORCAUSDT",
  "MOVEBTC",
  "MOVEUSDT",
  "MOVEBNB",
  "MOVEFDUSD",
  "MOVETRY",
  "MEBTC",
  "MEUSDT",
  "MEFDUSD",
  "METRY",
  "ACXUSDC",
  "ORCAUSDC",
  "ACXFDUSD",
  "ORCAFDUSD",
  "ACXTRY",
  "ORCATRY",
  "KSMTRY",
  "CELOTRY",
  "HIVEFDUSD",
  "HIVEUSDC",
  "IDEXFDUSD",
  "IDEXUSDC",
  "TLMFDUSD",
  "TLMUSDC",
  "VELODROMEUSDT",
  "VANAUSDT",
  "VANABNB",
  "VANAFDUSD",
  "VANATRY",
  "1000CATUSDT",
  "1000CATBNB",
  "1000CATFDUSD",
  "1000CATTRY",
  "PENGUUSDT",
  "PENGUBNB",
  "PENGUFDUSD",
  "PENGUTRY",
  "USUALBTC",
  "USUALFDUSD",
  "USUALTRY",
  "1000CATUSDC",
  "PENGUUSDC",
  "BIOUSDT",
  "BIOBNB",
  "BIOFDUSD",
  "BIOTRY",
  "BIOUSDC",
  "HIVETRY",
  "MOVEUSDC",
  "PHATRY",
  "SUSHITRY",
  "DUSDT",
  "DTRY",
  "APTJPY",
  "SUIJPY",
  "XLMJPY",
  "PEPEJPY",
  "PHAUSDC",
  "USDCPLN",
  "STEEMUSDC",
  "USUALUSDC",
  "AIXBTUSDT",
  "AIXBTUSDC",
  "CGPTUSDT",
  "CGPTUSDC",
  "COOKIEUSDT",
  "COOKIEUSDC",
  "SBTC",
  "SBNB",
  "SETH",
  "SEUR",
  "SFDUSD",
  "STRY",
  "SUSDC",
  "SUSDT",
  "IOTXJPY",
  "SEIJPY",
  "SOLVUSDT",
  "SOLVBNB",
  "SOLVFDUSD",
  "SOLVTRY",
  "TRUMPUSDT",
  "TRUMPUSDC",
  "AIXBTTRY",
  "TRUMPTRY",
  "ANIMEUSDT",
  "ANIMEUSDC",
  "ANIMEBNB",
  "ANIMEFDUSD",
  "ANIMETRY",
  "BERABTC",
  "BERAUSDT",
  "BERAUSDC",
  "BERAFDUSD",
  "BERABNB",
  "BERATRY",
  "1000CHEEMSUSDT",
  "1000CHEEMSUSDC",
  "TSTUSDT",
  "TSTUSDC",
  "LAYERBTC",
  "LAYERUSDT",
  "LAYERUSDC",
  "LAYERBNB",
  "LAYERFDUSD",
  "LAYERTRY",
  "QTUMTRY",
  "TRUMPEUR",
  "VTHOTRY",
  "HEIBTC",
  "HEIUSDT"
]