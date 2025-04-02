// Definição das abreviações
const abreviacoes = {
    'Iogurte': 'IOG', 'Morango': 'MOR', 'Chocolate': 'CHOC', 'Macarrao': 'MAC', 'Cafe': 'CAF',
    'Ratoeira': 'RAT', 'Creme': 'CRE', 'Repelente': 'REP', 'Desodorizador': 'DESOD', 'Queijo': 'QUE',
    'Petit': 'PET', 'Sabonete': 'SAB', 'Locao': 'LOC', 'Antisseptico': 'ANT', 'Limpador': 'LIM',
    'Flotador': 'FLO', 'Desinfetante': 'DESINF', 'Fralda': 'FRALDA', 'Escova': 'ESCOV', 'Sorvete': 'SORV',
    'Shampoo': 'SHAMP', 'Biscoito': 'BISC', 'Lenço': 'LEN', 'Leite': 'LEITE', 'Educador': 'EDUC',
    'Cerveja': 'CERV', 'Macarrão': 'MAC', 'Maionese': 'MAI', 'Enxaguante': 'ENX', 'Ativador': 'ATIV',
    'Whisky': 'WHI', 'Vodka': 'VOD', 'Cereal': 'CER', 'Amendoim': 'AMEN', 'Doce': 'DOCE', 'Bebida': 'BEB',
    'Flocos': 'FLOCOS', 'Bala': 'BALA', 'Limpa': 'LIM', 'Sobremesa': 'SOB', 'Porta': 'PORTA',
    'Condicionador': 'COND', 'Caldo': 'CALDO', 'Molho': 'MOLHO', 'Batata': 'BAT', 'Refrigerante': 'REFRIG',
    'Amaciante': 'AMAC', 'Sabão': 'SAB', 'Tomate': 'TOM', 'Geleia': 'GEL', 'Tintura': 'TIN',
    'Salada': 'SAL', 'Esponja': 'ESP', 'Iscas': 'ISC', 'Tapete': 'TAP', 'Espuma': 'ESPUM',
    'Ervilha': 'ERV', 'Milho': 'MIL', 'Adoçante': 'ADO', 'Álcool': 'ALC', 'Lasanha': 'LAS',
    'Salsicha': 'SAL', 'Massa': 'MAS', 'Almôndega': 'ALM', 'Kibe': 'KIB', 'Yakisoba': 'YAK',
    'Escondidinho': 'ESC', 'Alimento': 'ALI', 'Tirinhas': 'TIR', 'Dueto': 'DUETO', 'Seleta': 'SEL',
    'Tekitos': 'TEK', 'Alcaparras': 'ALC', 'Cookies': 'COOK', 'Bruschetta': 'BRU', 'Fita': 'FITA',
    'Coracao': 'COR', 'Peru': 'PER', 'Lapis': 'LAP', 'Caneta': 'CAN', 'Sofiatelli': 'SOF',
    'Aveia': 'AVE', 'Farelo': 'FAR', 'Vinagre': 'VIN', 'Talco': 'TAL', 'Presunto': 'PRES',
    'Achocolatado': 'ACHOC', 'Odorizador': 'ODO', 'Antitranspirante': 'ANT', 'Bombom': 'BOMBOM',
    'Feijao': 'FEIJAO', 'Grão': 'GRAO', 'Recorte': 'REC', 'Granulado': 'GRAN', 'Vermouth': 'VERM',
    'Gelatina': 'GEL', 'Requeijão': 'REQ', 'Mostarda': 'MOST', 'Big': 'BIG', 'Pizza': 'PIZ',
    'Mistura': 'MIS', 'Fuba': 'FUB', 'Sandália': 'SAND', 'Havaianas': 'HAV', 'Touca': 'TOU',
    'Bovina':'BOV', 'Vacuo':'VAC',


    'Cocada': 'COC', 'Patê': 'PAT', 'Carvão': 'CARV', 'Meio': 'MEI', 'Composto': 'COMP',
    'Goma': 'GOM', 'Granola': 'GRA', 'Neutralizador': 'NEU', 'Lixa': 'LIX',
    'Salame': 'SAL', 'Drageado': 'DRA', 'Fondue': 'FON', 'Kit': 'KIT', 'Cr': 'CR',
    'Capsula': 'CAP', 'Sapólio': 'SAP', 'Borracha': 'BOR', 'Grampeador': 'GRA', 'Empanado': 'EMP',
    'Esmalte': 'ESM', 'Mel': 'MEL', 'Alvejante': 'ALV', 'Coco': 'COC', 'Cha': 'CHA',
    'Petit': 'PET', 'Confeito': 'CON', 'Extrato': 'EXT', 'Bovino': 'BOV', 'Desodorante': 'DESOD',
    'Limpador': 'LIMP', 'Banana/Maca': 'BAN/MAC', 'Morango/Maracuja': 'MOR/MARAC', 'Chocolate/Nata': 'CHOC/NAT',
    'Limao/Framboesa': 'LIM/FRAMB', 'Coco/Pina': 'COC/PIN', 'Pera/Melancia': 'PER/MELANC', 'Creme': 'CR',
    'Pro': 'P', 'Sensitive ': 'SENS', 'Alivio': 'ALIV', 'Imediato': 'IMED', 'Ativado': 'ATV',
    'Coxao': 'COX', 'Coxa Sobrecoxa': 'Cox Sob', 'Maca/Framboesa': 'MAC/FRAN', 'Shampoo': 'SH',
    'Condicionador': 'COND', 'Hora': 'H', 'Dormir': 'DORM', 'Hidratacao': 'HID', 'Branca': 'BCO',
    'Azul': 'AZ', 'Preto': 'PTO', 'Vermelho': 'VERM', 'Leve': 'LV', 'Page': 'PG',
    'Mais': '+', 'Menos': '-', 'Leve 500ml Pague 300ml': 'LV500 PG300', 'Leve 1kg Pague 500g': 'LV1KG PG500',
    'Leve 2L Pague 1L': 'LV2L PG1L', 'Leve 1.5kg Pague 1kg': 'LV1.5K PG1K', 'Leve 750ml Pague 500ml': 'LV750 PG500',
    'Leve 2kg Pague 1.2kg': 'LV2KG PG1.2KG', 'Leve 1L Pague 600ml': 'LV1L PG600', 'Leve 500g Pague 250g': 'LV500 PG250',
    'Leve 1,2L Pague 800ml': 'LV1.2L PG800', 'Leve 3kg Pague 2kg': 'LV3KG PG2KG', 'Leve 1,8L Pague 1L:': 'LV1.8L PG1L',
    'Sabonete': 'SAB', 'Erva Doce': 'ERV', 'Calabresa': 'CALAB', 'Salgadinho': 'SALG', 'Cremoso': 'CR',
    'Saboneteira': 'SABONET', 'Energética': 'ENERG', 'Original': 'ORIG', 'Tradicional': 'TRAD',
    'Achocolatado': 'ACHOC', 'Barrinha': 'MAXI', 'Bolinho': 'BOLIN', 'Bolo': 'BOL', 'Inseticida': 'INSET',
    'Multiinseticida': 'MULTI', 'Ração': 'ALIM', 'Pequenas': 'PQ', 'Inseticida': 'INSET',

    'Abacaxi': 'ABA', 'Abóbora': 'ABO', 'Alface': 'ALF', 'Arroz': 'ARRO', 'Azeite': 'AZE',
    'Bacon': 'BAC', 'Bacalhau': 'BAC', 'Banana': 'BAN', 'Batata Doce': 'BAT', 'Berinjela': 'BER',
    'Bife': 'BIF', 'Biscoito recheado': 'BISC RECH', 'Brócolis': 'BRO', 'Cabelos': 'CABE', 'Camarão': 'CAM',
    'Carne moída': 'CARMO', 'Cebola': 'CEB', 'Chá': 'CHA', 'Chicória': 'CHIC', 'Couve': 'COU',
    'Couve-flor': 'COUV', 'Doce de leite': 'DOCE', 'Farinha de trigo': 'FAR TRI',
    'Feijão preto': 'FEIPR', 'Feijão carioca': 'FEICAR', 'Frango': 'FRAN', 'Frango desfiado': 'FGO DESF',
    'Gengibre': 'GEN', 'Goiaba': 'GOI', 'Gorgonzola': 'GORG', 'Hambúrguer': 'HAMB', 'Hortelã': 'HORT',
    'Jiló': 'JIL', 'Kiwi': 'KIWI', 'Laranja': 'LAR', 'Lentilha': 'LEN', 'Maçã': 'MAC',
    'Manjericão': 'MANJ', 'Melão': 'MELAO', 'Menta': 'MEN', 'Mexilhão': 'MEX', 'Morango silvestre': 'MOR SILV',
    'Nabo': 'NAB', 'Nectarina': 'NECT', 'Ovo': 'OVO', 'Ovo de codorna': 'OV COD', 'Pêssego': 'PES',
    'Pepino': 'PEP', 'Pipoca': 'PIP', 'Pistache': 'PIS', 'Pó de café': 'PO CAF', 'Pomelo': 'POM',
    'Queijo minas': 'QUEMIN', 'Queijo prato': 'QUEP', 'Quiabo': 'QUIA', 'Rabanete': 'RABA',
    'Raspas de limão': 'RASLIM', 'Requeijão cremoso': 'REQCRE', 'Salsão': 'SALS', 'Semente': 'SEM',
    'Chia': 'CHI', 'Sorvete de creme': 'SORV CREM', 'Tâmara': 'TAM', 'Tomate': 'TOM',
    'Trigo': 'TRIG', 'Uva': 'UVA', 'Vagem': 'VAG'
};

const marcasNaoAbreviar = [
    'DANONE', 'VIGOR', 'NESTLE', 'YOKI', 'SADIA', 'PERDICAO', 'SEARA', 'BAUDUCCO',
    'GAROTO', 'LACTA', 'ARCOR', 'CACAU SHOW', 'KOPENHAGEN', 'HERSHEY', 'FERRERO ROCHER',
    'KINDER', 'OREO', 'MCCAIN', 'DORITOS', 'RUFFLES', 'PRINGLES', 'ELMA CHIPS', 'LAYS',
    'FINI', 'HARIBO', 'MM', 'SKITTLES', 'MARS', 'TWIX', 'KITKAT', 'TOBLERONE', 'LINDT',
    'MILKA', 'PRESIDENT', 'PHILADELPHIA', 'POLENGHI', 'ITAMBE', 'BATAVO', 'TIROL', 'ELEGE',
    'PARMALAT', 'CATUPIRY', 'TIROLEZ', 'AVIACAO', 'QUALY', 'DORIANA', 'DELICIO',
    'BECEL', 'FLORA', 'AMELIA', 'AURORA', 'CAMIL', 'TIO JOAO', 'BROTO LEGAL', 'RARI',
    'URBANO', 'CEREALISTA', 'FRIMESA', 'KNORR', 'MAGGI', 'AJINOMOTO', 'SAZON', 'DUCOCO',
    'SOCORO', 'QUERO', 'HEINZ', 'HELLMANNS', 'FUGINI', 'POMAROLA', 'ELEFANTE', 'ARISCO',
    'LIZA', 'GALLO', 'ANDORINHA', 'BORGES', 'QUALITA', 'BLUE VILLE', 'CALDO BOM', 'ZAELI',
    'CEPERA', 'BLUEBONNET', 'BREMIL', 'COPACOL', 'FRIBOI', 'MINERVA', 'MARFRIG', 'PAMPLONA',
    'PIF PAF', 'GOMES DA COSTA', '3 CORACOES', 'MELITTA', 'PILAO', 'NESCafe', 'CAFE DO PONTO',
    'CAFE PELE', 'CHEETOS', 'TYRRELLS', 'SOUR PATCH KIDS', 'FANDANGOS', 'COLGATE', 'ORALB',
    'TRENTO', 'BIC', 'VEJA', 'DENTAL', 'ANGUS', 'MOLE', 'DANUBIO', 'JOHNSONS', 'DOVE', 'REXONA',
    'NIVEA', 'FARNESE', 'YPE', 'FLOR YPE', 'PANTENE', 'SEDA', 'TREsemme', 'ELSEVE',
    'HEAD & SHOULDERS', 'GARNIER', 'NATURA', 'AVON', 'SENSODYNE', 'PARODONTAX', 'CLOSEUP', 'AQUAFRESH',
    'PROTEX', 'PALMOLIVE', 'LUX', 'FRANCIS', 'LIFEBUOY', 'NEUTROGENA', 'CLEAN & CLEAR', 'VICHY', 'LA ROCHEPOSAY',
    'CLEAR', 'BIO EXTRATUS', 'SELVAGEM', 'GRIFFUS', 'BIOVEGETAIS', 'INOAR', 'SCHWARZKOPF', 'KEUNE',
    'WELLA', 'SALON LINE', 'YAMA', 'FITOERVAS', 'HASKELL', 'SKALA', 'MULTIVEGETAIS', 'BIOCAP', 'MEGA HAIR',
    'CHARIS', 'TRUSS', 'NAZCA', 'AMEND', 'VITADERM', 'HERBACHE', 'ACQUAFRESH', 'PROHAIR', 'NICK & VICK',
    'KIKKOMAN', 'CARAMELLO', 'PRIMOR', 'GLAMOUR', 'CARMIM', 'VIZINHO', 'GOIAS',
    'AMBEV', 'BRAMA', 'SKOL', 'ANTARTICA', 'HEINEKEN', 'SERENATA', 'COPA', 'BESNI', 'ARIEL',
    'DOLLY', 'SUCO MAGO', 'ARISCO', 'TANG', 'GOYA', 'BELOW', 'HAPPY DAY', 'PALMEIRAS', 'CIPA',
    'TRAMONTINA', 'MOR', 'SEB', 'OLIVEIRA', 'LISBOA', 'CAMPOS DO JORDAO', 'GARCIA', 'CHIVAS',
    'JACOBS', 'BERGAMOT', 'GOLD', 'PILAO', 'RODIL', 'SANTO ANTONIO', 'IMPERIAL', 'FORTE',
    'LUCAS', 'ADEGA', 'CAMPOS', 'SANTA CLARA', 'LIMPA', 'UNILENE', 'WINDSOR', 'DUCA',
    'FLORESTA', 'AMBAR', 'BARAO', 'SANITAS', 'RAMA', 'TONI', 'DOREMI', 'PUPILA', 'SOL',
    'NOVA', 'VENEZA', 'TIGRE', 'GRAAL', 'JERONIMO', 'PEROLA',
    'CASILLERO DEL DIABLO', 'CONCHA Y TORO', 'CHANDON', 'MIOLO', 'SALTON', 'LIDIO CARRARO',

    'DON MELCHOR', 'BAROSSA VALLEY', 'TERRAZAS DE LOS ANDES', 'MENDOZA',
    'POMADORO', 'POMAROLA', 'HEINZ', 'ELEFANTE', 'GUSTO', 'CALDO BOM', 'SALSA', 'QUERO',
    'FLEISCHMANNS', 'LA PASTINA',
    'DUCOCO', 'CAMIL', 'FLEISCHMANNS', 'SALGADO', 'SOCORO', 'VERDE CAMPO', 'CRUZ', 'JAZ',
    'PALMEIRAS', 'GOIAS',
    'CIOCCA', 'LINDT', 'GHIRARDELLI', 'GODIVA', 'CADBURY', 'DOVE CHOCOLATE', 'VALRHONA', 'CAVALIER', 'RITTER SPORT',
    'VINHO DE CACHAÇA', 'CAMPOS DE LUZ', 'ALMAZUL', 'VINHO AZUL', 'VINHO DUAS QUINTAS', 'MARQUES DE CASA CONCHA',
    'LAGARES DE CABO', 'VILLA CHILE', 'MARQUES DE MURRIETA', 'LAGARETA', 'CONCHA Y TORO', 'PERRIER-JOUET',
    'MOET & CHANDON', 'VEUVE CLICQUOT', 'DOM PERIGNON', 'CAMPAIGN', 'BELVEDERE', 'CÎROC', 'ABSOLUT',
    'KETEL ONE', 'BULLDOG', 'STOLICHNAYA', 'HENDRICKS', 'GORDONS', 'BOMBAY SAPPHIRE', 'BOMBAY ORIGINAL',
    'JACK DANIELS', 'JOHNNIE WALKER', 'MACALLAN', 'JAMESON', 'GLENFIDDICH', 'GLENLIVET', 'BOWMORE',
    'HAVANA CLUB', 'BACARDI', 'CAPTAIN MORGAN', 'MEZCAL', 'PATRON', 'HERRADURA', 'CLASE AZUL',
    'RED BULL', 'MONSTER', 'AMP ENERGY', 'NOS', 'ROCKSTAR', '5-HOUR ENERGY', 'GATORADE', 'POWERADE',
    'ISOTONIC', 'REDBULL', 'ENERGY DRINK', 'BRINOX', 'BR SPICES', 'DOM FIORELO', 'CISNE',
    'TORCIDA', 'SNACKS', 'KELECK', 'HOT DOG', 'SALSICHA', 'DARLING', 'DIMENSION', 'DOCTOR', 'DOVE',
    'COQUEIRO', 'GOMES COSTA', 'ROBINSON CRUSOE', 'BRITANIA', 'PLASUTIL', 'CIF', 'BONDUELLE', 'FUGINI',
    'KNORR', 'PREDILECTA', 'STELLA', 'DOURO', 'GALLO', 'KODILAR', 'MAE TERRA', 'SALON LINE', 'ELSEVE', 'AUSSIE', 'CAFUNE',
    'CLEAR', 'TRA LA LA', 'SANREMO', 'ALBANY', 'BABY', 'NUTRI MILK', 'ORUM', 'DUPAN', 'ORFEU', 'STARBUCKS', 'LISTERINE', 'MEZZANI',
    'CHAMYTO', 'BOB ESPONJA', 'ELEGE', 'PERDIGAO', 'DORI', 'FINI', 'HARIBO', 'YOGURTE', 'BUBBALOO', 'ELMA', 'CHIPS', 'BATATA', 'AMARAL',
    'PRINGLES', 'MC CAIN', 'BEM', 'BRASIL', 'AMARAL', 'STAX',
    'QUEST', 'OPTIMUM NUTRITION', 'CLIF BAR', 'NATURE VALLEY', 'GRENADE', 'BSN', 'PURE PROTEIN',

    'MUSCLEPHARM', 'PROMIX', 'RXBAR',
    'FRITOS', 'HERRS', 'WISE', 'TOSTITOS', 'CAPE COD', 'KETTLE BRAND', 'POPCHEPS', 'SNYDER’S OF HANOVER',
    'FUSION', 'BURN', 'BALY', 'ADES',
    'DURACELL', 'ENERGIZER', 'PANASONIC', 'VARTA', 'RAYOVAC',
    'PHILIPS', 'OSRAM', 'GE LIGHTING', 'CREE', 'SYLVANIA',
    'COCA-COLA', 'PEPSI', 'KRAFT', 'ABRIL', 'SCHWEPPES',
    'GILLETTE', 'SCHICK', 'BIC', 'ASTRA', 'DERBY', 'YOKITOS', 'NESTON',
    'JUSSARA', 'FRIMINHO', 'NESCAU', 'TODDY', 'ALPINO',
    'TODINHO', 'DANETT', 'LEITE NINHO', 'NINHO', 'CAMP', 'TANG', 'DOLE', 'LATICINIOS', 'YOGURTE', 'MALTINE', 'MANTIQUEIRA', 'MOLICO', 'PARMALAT',
    'SABOROSO', 'MOCOCA', 'MATILAT', 'YOPRO', 'TODDYNHO', 'PIRAKIDS',
    'ADRIA', 'VIDA', 'VERDE', 'CAMPO', 'FRUIT', 'SHOOT', 'CLUB', 'SOCIAL',
    'CLASSIC', 'CHOCOOKY', 'CHOCOLICIA', 'CEREALE', 'CALIPSO', 'BONO',
    'BOLAMEL', 'BISCOLATA', 'BELVITA', 'BELIVE', 'TUBETES', 'TORTUGUITA', 'RODRIGO', 'MAGNI', 'PARATI', 'CRACKER',
    'PANCO', 'ZABET', 'NIKITO', 'VITARELLA', 'VISCONTI', 'VIEIRA', 'CASA', 'SUICA', 'PANQUINHO', 'PINGUINOS', 'SEVEN',
    'BOYS', 'WICKBOLD', 'SUICA', 'MONTEVERGINE',
    'FERRERO', 'RENATA', 'PULLMAN', 'CHAMBINHO', 'RAID', 'BATAVINHO',
    'ACTIVIA', 'NESFIT', 'FRUTAP', 'DANONINHO', 'PEDIGREE', 'FRISKIES',
    'DOG CHOW', 'CHAMP', 'MEZZANI', 'DACOLONIA', 'MID', 'GUARANA',
    'FANTA', 'COTUBA', 'TRINK', 'H2OH!', 'REPELEX', 'SUKITA', 'SPRITE',
    'CAMPARI', 'CRYSTAL', 'GOMES', 'COSTA', 'QUALIMAX', 'QUAKER', 'ORAL-B', 'GLADE', 'JACK DANIELS',
    'JOHNNIE WALKER', 'MACALLAN', 'JAMESON', 'GLENFIDDICH', 'GLENLIVET', 'BOWMORE',
    'CHANDON', 'MOET & CHANDON', 'VEUVE CLICQUOT', 'FREIXENET', 'MUMM', 'TERRA NOVA',
    'SALTON', 'CASA VALDUGA', 'APEROL', 'BACARDI', 'CAMPARI', 'CRYSTAL', 'GORDONS', 'HEINEKEN', 'BUDWEISER', 'STELLA ARTOIS',
    'CORONA', 'JIM', 'BEAM', 'MAKERS',

    'SANTA', 'CLARA', 'PEROLA', 'JACK', 'DANIEL', 'JOHNNIE', 'WALKER', 'RED', 'LABEL',
    'JAMESON', 'CHIVAS', 'REGAL', 'GLENFIDDICH', 'BALLANTINES', 'CIROC', 'ABSOLUT',
    'SMIRNOFF', 'GREY', 'GOOSE', 'HENNESSY', 'REMY', 'MARTIN', 'BOMBAY', 'SAPPHIRE',
    'BEEFEATER', 'PATRON', 'DON', 'JULIO', '51', 'YPIOCA', 'SELETA', 'VELHO', 'BARROSO', 'COROTE',
    'AGUARDENTE', 'DOM', 'BOSCO', 'AGUARDENTE', 'DA', 'VILA', 'AGUARDENTE', 'VALE', 'VERDE', 'CANARINHO', 'PITU',
    'GROSSO', 'JOLLY', 'RANCHER', 'SANTA', 'ROSA', 'LIMA', 'DA', 'MATA', 'CABO', 'ATLANTICO',
    'LEBLON', 'ANIS', 'VERDE', 'ABADIA', 'REPOSADO', 'SAINT', 'BARTHELEMY', 'ALCOOL', 'LUBRITEX',
    'NATURALMENTE', 'BASTOS', 'SOLOMBE', 'ALMA', 'DO', 'VALE', 'AGUARDENTE', 'DE', 'SAO', 'FRANCISCO',
    'AQUECIDA', 'DE', 'ALAGOAS', 'ALCOOL', 'NEUTRO', 'BRANCO', 'COMPRADO', 'VOLVER', 'PITU', 'DE', 'PESCADOR',
    'TARRAGON', 'MONTES', 'CASILLERO', 'DEL', 'DIABLO', 'CONCHA', 'TORO', 'PORTO', 'FERREIRA',
    'SALTON', 'VIK', 'VINHO', 'DO', 'PORTO', 'QUINTA', 'DO', 'NOVAL', 'FERRER',
    'MARCHESE', 'DI', 'VILLA', 'ALMAVIVA', 'GRAFF', 'TOSCANI', 'RUFFINO', 'LUCA',
    'SANTA', 'RITA', 'LISBOA', 'PERRIER', 'JOUET', 'MOET', '&', 'CHANDON', 'DOM', 'PERIGNON', 'VEUVE', 'CLICQUOT',
    'G.H.', 'MUMM', 'CHAMPAGNE', 'TATTINGER', 'CHAMPAGNE', 'KRUG', 'LOUIS', 'BERNARD', 'VIAJANTE',
    'LAGUNA', 'LIVON', 'BORGOGNO', 'BAROLO', 'BRUNELLO', 'DI', 'MONTALCINO', 'TENUTA', 'DI', 'CAPRANICA',
    'RIBEIRO', 'MARQUES', 'DE', 'CACEDELLA', 'CHARDONNAY', 'MALBEC', 'TANNAT', 'CABERNET', 'SAUVIGNON',
    'MERLOT', 'SYRAH', 'ZINFANDEL', 'PORTO', 'CARRAS', 'BORGOGNO', 'VILA', 'NOVA', 'DOWS',
    'GRAHAM', 'MARTINHOS', 'FERREIRA', 'MARTINEZ', 'ALVARO', 'CASTRO', 'ADEGA', 'COOPERATIVA',
    'DOMAINE', 'LAFAGE', 'SANTA', 'CARMEN', 'TERRENO', 'ESPORÃO', 'QUINTA', 'DOS', 'CARVALHAIS',
    'BARROS', 'MARTIN', 'CODAX', 'FERREIRA', 'FONSECA', 'MOUTON', 'CADET', 'LAGOSTIM',
    'ALVARO', 'CASTRO', 'VIEIRA', 'DE', 'CASTRO', 'CASA', 'MAZA', 'SERRA', 'DA', 'ESTRELA', 'QUINTA', 'DE', 'LA', 'ROSA',
    'ALMEIDA', 'GARRETT', 'HERDADE', 'DO', 'ESPORAO', 'PAXA', 'LISBOA', 'BRANCO', 'QUINTA', 'DA', 'GOMBEIRA',
    'AUX', 'AMARONE', 'CAIRADOS', 'VALLEGRE', 'CAVES', 'DE', 'SANTAR', 'CAVES', 'DE', 'FALCAO',
    'CAVES', 'DE', 'LA', 'ROSE', 'QUINTA', 'DO', 'SANTORIN', 'BORGES', 'PALHEIRO', 'ALTO', 'DE', 'CEDRO',
    'LAGRIMAS', 'DE', 'ORO', 'DOM', 'HENRIQUE', 'LAMINHA', 'DE', 'VALLE', 'GARCELO', 'HERCULANAS',
    'VILA', 'VELHA', 'CAVES', 'DE', 'PEGO', 'QUINTA', 'DA', 'REGUA', 'HENRIQUES', 'DOM', 'BARROS', 'BOSQUE',
    'FERRAGUETE', 'PAXA', 'ESPUMANTE', 'LAGUARDIA', 'HERDADE', 'DO', 'SOL', 'DAVID', 'CAMPOS',
    'FERRAGUETE', 'ESPUMANTE', 'BORGES', 'VINHO', 'TERRAS', 'DE', 'LAMEIRINHA', 'STELLAR', 'WINES'

];

function abreviarProduto(nomeProduto) {
    const palavras = nomeProduto.split(/\s+/);
    return palavras.map(palavra => {
        const palavraUpper = palavra.toUpperCase();
        if (marcasNaoAbreviar.includes(palavraUpper)) {
            return palavraUpper; // Mantém a marca sem abreviação
        }
        return abreviacoes[palavra] || palavra;
    }).join(' ');
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('produtoForm');
    const inputProduto = document.getElementById('produto');
    const resultado = document.getElementById('abrev1');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const produto = inputProduto.value.trim();
        if (produto) {
            resultado.textContent = abreviarProduto(produto);
        }
    });
});