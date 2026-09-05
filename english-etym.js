// ===== 영단어 어원(뿌리) 데이터 =====
// 단어 하나하나가 아니라 "뿌리"별로 묶는다. 뿌리 설명 하나로 형제 단어가 다 걸린다.
// r: 뿌리 표기 · m: 뿌리 뜻 · tip: 한 줄 요약 · w: { 단어: 분해 설명 }
// 이 파일은 english-vocab.html 과 같은 폴더에 있어야 합니다.
const ETYM_ROOTS = [
  {
    r: 'struct · stru', m: '쌓다, 세우다',
    tip: '벽돌을 쌓아 올리는 그림을 떠올려요. 앞에 뭘 붙이느냐로 짓기도 하고 무너뜨리기도 해요.',
    w: {
      'destroy': 'de(거꾸로) + stroy(쌓다) → 쌓은 걸 되돌리다 → 파괴하다',
      'construct': 'con(함께) + struct(쌓다) → 함께 쌓아 올리다 → 건설하다',
      'instruct': 'in(안에) + struct(쌓다) → 머릿속에 차곡차곡 쌓아 주다 → 가르치다',
      'structure': 'struct(쌓다) + ure(것) → 쌓아 올린 것 → 구조, 건축물'
    }
  },
  {
    r: 'duc · duct', m: '이끌다',
    tip: '어디론가 이끌고 간다는 뜻. 앞의 접두사가 "어느 방향으로"를 정해요.',
    w: {
      'introduce': 'intro(안으로) + duce(이끌다) → 안으로 데려오다 → 소개하다, 도입하다',
      'product': 'pro(앞으로) + duct(이끌다) → 앞으로 이끌어 낸 것 → 생산물, 제품',
      'produce': 'pro(앞으로) + duce(이끌다) → 앞으로 끌어내다 → 생산하다',
      'reduce': 're(뒤로) + duce(이끌다) → 뒤로 끌어당기다 → 줄이다',
      'education': 'e(밖으로) + duc(이끌다) → 안에 있는 것을 밖으로 끌어내 줌 → 교육'
    }
  },
  {
    r: 'vent · ven', m: '오다',
    tip: '무언가가 "온다"는 뜻. 우연히 마주치는 것도, 미리 와서 막는 것도 여기서 나와요.',
    w: {
      'invent': 'in(위에) + vent(오다) → 우연히 마주치다 → 처음 생각해 내다 → 발명하다',
      'invention': 'invent(발명하다) + ion(것) → 발명, 발명품',
      'event': 'e(밖으로) + vent(오다) → 밖으로 나온 일 → 사건, 행사',
      'prevent': 'pre(미리) + vent(오다) → 미리 와서 막아서다 → 막다, 예방하다',
      'adventure': 'ad(~쪽으로) + vent(오다) → 앞으로 다가올 일 → 모험'
    }
  },
  {
    r: 'spect · spec', m: '보다',
    tip: '"본다"는 뜻. 어느 쪽을 보느냐에 따라 뜻이 갈려요.',
    w: {
      'spectator': 'spect(보다) + ator(사람) → 보는 사람 → 관중',
      'respect': 're(다시) + spect(보다) → 다시 돌아볼 만큼 훌륭하다 → 존경',
      'expect': 'ex(밖을) + spect(보다) → 밖을 내다보며 기다리다 → 기대하다',
      'inspect': 'in(안을) + spect(보다) → 안을 들여다보다 → 검사하다'
    }
  },
  {
    r: 'port', m: '나르다',
    tip: '짐을 나른다는 뜻. 항구(port)도 물건을 나르는 곳이라 같은 뿌리예요.',
    w: {
      'important': 'im(안으로) + port(나르다) → 안으로 들여올 만큼 값진 → 중요한',
      'importance': 'important(중요한)의 명사형 → 중요성',
      'export': 'ex(밖으로) + port(나르다) → 밖으로 실어 내다 → 수출하다',
      'transport': 'trans(가로질러) + port(나르다) → 건너 실어 나르다 → 수송하다'
    }
  },
  {
    r: 'fac · fect · fic', m: '만들다, 하다',
    tip: '무언가를 "만든다"는 뜻. 공장(factory)이 물건을 만드는 곳인 것과 같아요.',
    w: {
      'effect': 'ef(밖으로) + fect(만들다) → 밖으로 만들어져 나온 것 → 효과, 결과',
      'affect': 'af(~에) + fect(만들다) → ~에 작용을 만들다 → 영향을 미치다',
      'perfectly': 'per(완전히) + fect(만들다) → 완전히 만들어진 → 완벽하게',
      'factory': 'fact(만들다) + ory(장소) → 만드는 곳 → 공장'
    }
  },
  {
    r: 'mov · mot', m: '움직이다',
    tip: '움직임을 뜻해요. 마음이 움직이면 감정(emotion)이 되지요.',
    w: {
      'motion': 'mot(움직이다) + ion(것) → 움직임, 동작',
      'emotion': 'e(밖으로) + motion(움직임) → 마음이 밖으로 움직여 나온 것 → 감정',
      'remove': 're(뒤로) + move(움직이다) → 뒤로 치워 옮기다 → 없애다, 제거하다',
      'movie': 'mov(움직이다) → 움직이는 그림 → 영화'
    }
  },
  {
    r: 'spir', m: '숨 쉬다',
    tip: '숨을 뜻해요. 눈에 안 보이지만 살아 있게 하는 것 — 그래서 영혼도, 영감도 여기서 나와요.',
    w: {
      'spirit': 'spir(숨) + it → 숨결 같은 것 → 영혼, 정신',
      'inspire': 'in(안으로) + spire(숨 쉬다) → 마음속에 숨을 불어넣다 → 영감을 주다',
      'respiration': 're(반복) + spir(숨 쉬다) → 계속 숨 쉬는 일 → 호흡'
    }
  },
  {
    r: 'nat · nasc', m: '태어나다',
    tip: '"태어남"이 뿌리. 태어난 그대로면 자연, 같이 태어난 무리면 나라가 돼요.',
    w: {
      'nature': 'nat(태어나다) + ure(것) → 태어난 그대로의 것 → 자연, 본성',
      'natural': 'nature(자연) + al(~한) → 자연의, 자연스러운',
      'naturally': 'natural(자연스러운) + ly → 자연스럽게',
      'national': 'nat(태어나다) → 같이 태어난 무리(nation, 나라)의 → 국가의',
      'international': 'inter(사이) + national(국가의) → 나라와 나라 사이의 → 국제적인'
    }
  },
  {
    r: 'sens · sent', m: '느끼다',
    tip: '느낌이 뿌리. 오감(sense)도, 예민함도 여기서 나와요.',
    w: {
      'sense': 'sens(느끼다) → 느끼는 힘 → 감각',
      'sensitive': 'sens(느끼다) + itive(~하는) → 잘 느끼는 → 예민한, 민감한',
      'sensor': 'sens(느끼다) + or(것) → 느끼는 장치 → 센서'
    }
  },
  {
    r: 'ced · cess', m: '가다',
    tip: '앞으로 나아간다는 뜻. 차례차례 나아가면 과정, 뒤이어 잘 나아가면 성공이 돼요.',
    w: {
      'process': 'pro(앞으로) + cess(가다) → 앞으로 나아가는 순서 → 과정',
      'success': 'suc(뒤이어) + cess(가다) → 뒤이어 잘 나아감 → 성공',
      'successfully': 'success(성공) + fully → 성공적으로'
    }
  },
  {
    r: 'tract', m: '끌다',
    tip: '끌어당긴다는 뜻. 트랙터(tractor)가 끌어당기는 기계인 것과 같아요.',
    w: {
      'attract': 'at(~쪽으로) + tract(끌다) → 자기 쪽으로 끌어당기다 → 마음을 끌다',
      'attraction': 'attract(끌다) + ion(것) → 끌어당기는 것 → 매력, 명소',
      'subtract': 'sub(아래로) + tract(끌다) → 아래로 빼내다 → 빼다'
    }
  },
  {
    r: 'cap · ceiv · cept', m: '잡다',
    tip: '손으로 잡는다는 뜻. 받는 것도, 붙잡아 담는 것도 여기서 나와요.',
    w: {
      'capture': 'cap(잡다) + ture → 붙잡음 → 포획하다, (사진에) 담다',
      'receive': 're(도로) + ceive(잡다) → 건네오는 걸 받아 쥐다 → 받다',
      'accept': 'ac(~쪽으로) + cept(잡다) → 내 쪽으로 받아 쥐다 → 받아들이다'
    }
  },
  {
    r: 'ject', m: '던지다',
    tip: '던진다는 뜻. 앞에 던지면 계획, 맞은편에 던지면 반대가 돼요.',
    w: {
      'object': 'ob(맞은편에) + ject(던지다) → 앞에 던져진 것 → 물건, 대상',
      'project': 'pro(앞으로) + ject(던지다) → 앞으로 던져 놓은 것 → 계획, 과제',
      'reject': 're(도로) + ject(던지다) → 도로 던져 버리다 → 거절하다'
    }
  },
  {
    r: 'sign', m: '표시',
    tip: '표시를 뜻해요. 표시를 그려 두면 설계, 표시를 보내면 신호가 돼요.',
    w: {
      'signal': 'sign(표시) + al → 표시로 보내는 것 → 신호',
      'design': 'de(밑그림으로) + sign(표시) → 표시를 그려 두다 → 설계, 디자인',
      'signature': 'sign(표시) + ature → 나만의 표시 → 서명'
    }
  },
  {
    r: 'form', m: '모양',
    tip: '모양·틀을 뜻해요. 하나의 모양으로 맞추면 교복(uniform)이 되지요.',
    w: {
      'form': 'form(모양) → 형태; 형성하다',
      'information': 'in(안에) + form(모양) → 머릿속에 모양을 만들어 주는 것 → 정보',
      'transform': 'trans(가로질러) + form(모양) → 모양을 바꾸다 → 변형시키다',
      'uniform': 'uni(하나) + form(모양) → 모두 하나의 모양 → 교복, 제복'
    }
  },
  {
    r: 'loc', m: '장소',
    tip: '"자리"를 뜻해요. 그 지역에 자리 잡은 것이 local이에요.',
    w: {
      'local': 'loc(장소) + al(~의) → 그 자리의 → 지역의, 현지의',
      'locally': 'local(지역의) + ly → 지역에서, 현지에서',
      'location': 'loc(장소) + ation → 자리 → 위치, 장소'
    }
  },
  {
    r: 'viv · surv', m: '살다',
    tip: 'viv는 "살다". sur(넘어서)가 붙으면 어려움을 넘어 살아남는 게 돼요.',
    w: {
      'survive': 'sur(넘어서) + vive(살다) → 넘기고 살아남다 → 생존하다',
      'survival': 'survive(살아남다) + al → 생존',
      'vivid': 'viv(살다) + id → 살아 있는 듯한 → 생생한'
    }
  },
  {
    r: 'aqua', m: '물',
    tip: '물을 뜻해요. 물고기를 물과 함께 두는 곳이 aquarium이에요.',
    w: {
      'aquatic': 'aqua(물) + tic(~의) → 물의, 수생의',
      'aquarium': 'aqua(물) + rium(장소) → 물이 있는 곳 → 수족관'
    }
  },
  {
    r: 'micro · scope', m: 'micro 작은 · scope 보는 기구',
    tip: 'micro는 아주 작다는 뜻, scope는 보는 기구예요. 둘을 합치면 작은 걸 보는 기구가 되죠.',
    w: {
      'microscope': 'micro(작은) + scope(보는 기구) → 현미경',
      'telescope': 'tele(멀리) + scope(보는 기구) → 망원경',
      'microwave': 'micro(작은) + wave(파동) → 아주 짧은 파동 → 전자레인지의 그 전파'
    }
  },
  {
    r: 'un- · im- · in- · dis-', m: '아니다 (반대로 뒤집는 접두사)',
    tip: '단어 앞에 붙어 뜻을 반대로 뒤집어요. 아는 단어에 붙으면 뜻이 저절로 보여요.',
    w: {
      'unusual': 'un(아니다) + usual(보통의) → 보통이 아닌 → 특이한',
      'unclear': 'un(아니다) + clear(분명한) → 불분명한',
      'uncomfortable': 'un(아니다) + comfortable(편안한) → 불편한',
      'unexpected': 'un(아니다) + expected(예상된) → 예상 밖의',
      'unable': 'un(아니다) + able(할 수 있는) → ~할 수 없는',
      'impossible': 'im(아니다) + possible(가능한) → 불가능한',
      'discomfort': 'dis(아니다) + comfort(편안함) → 불편'
    }
  },
  {
    r: '-able · -ible', m: '~할 수 있는 (뒤에 붙는 꼬리말)',
    tip: '동사 뒤에 붙어 "~될 수 있는"으로 만들어요.',
    w: {
      'preventable': 'prevent(막다) + able(할 수 있는) → 막을 수 있는',
      'comfortable': 'comfort(편안하게 하다) + able → 편안한',
      'valuable': 'value(가치) + able → 가치 있는, 값비싼'
    }
  },
  {
    r: 'dict · dic', m: '말하다',
    tip: '"말한다"가 뿌리. 미리 말하면 예언, 맞서 말하면 반박이 돼요.',
    w: {
      'dictionary': 'dict(말) + ionary(모음) → 말을 모아 놓은 것 → 사전',
      'predict': 'pre(미리) + dict(말하다) → 미리 말하다 → 예측하다',
      'contradict': 'contra(맞서) + dict(말하다) → 맞서 말하다 → 반박하다, 모순되다',
      'dictate': 'dict(말하다) + ate → 말해서 받아쓰게 하다 → 받아쓰게 하다, 명령하다',
      'verdict': 'ver(진실) + dict(말하다) → 진실을 말함 → (재판의) 평결'
    }
  },
  {
    r: 'vis · vid', m: '보다',
    tip: '"본다"가 뿌리. 미리 내다보면 준비하는 게 되고, 밖으로 드러나 보이면 증거가 돼요.',
    w: {
      'visit': 'vis(보다) + it → 보러 가다 → 방문하다',
      'visible': 'vis(보다) + ible(할 수 있는) → 볼 수 있는 → 눈에 보이는',
      'invisible': 'in(아니다) + visible(보이는) → 보이지 않는',
      'visual': 'vis(보다) + ual → 보는 것의 → 시각의',
      'video': 'vid(보다) → 보는 것 → 영상',
      'evidence': 'e(밖으로) + vid(보다) → 밖으로 드러나 보이는 것 → 증거',
      'provide': 'pro(미리) + vide(보다) → 미리 내다보고 마련하다 → 제공하다',
      'revise': 're(다시) + vise(보다) → 다시 살펴보다 → 수정하다',
      'advise': 'ad(~쪽으로) + vise(보다) → 봐 주고 일러 주다 → 조언하다'
    }
  },
  {
    r: 'press', m: '누르다',
    tip: '누른다는 뜻. 마음을 밖으로 눌러 내면 표현, 안으로 눌러 자국을 남기면 인상이 돼요.',
    w: {
      'express': 'ex(밖으로) + press(누르다) → 속마음을 밖으로 눌러 내다 → 표현하다',
      'impress': 'im(안으로) + press(누르다) → 마음속에 자국을 눌러 남기다 → 감명을 주다',
      'impression': 'impress(감명을 주다) + ion → 인상, 감명',
      'pressure': 'press(누르다) + ure → 누르는 힘 → 압력, 압박',
      'depression': 'de(아래로) + press(누르다) + ion → 아래로 눌린 상태 → 우울(증), 불경기',
      'oppress': 'op(맞서) + press(누르다) → 짓눌러 억압하다 → 억압하다'
    }
  },
  {
    r: 'part', m: '나누다, 부분',
    tip: '"부분"이 뿌리. 따로 나뉘면 apart, 부분을 나눠 맡으면 참여가 돼요.',
    w: {
      'apart': 'a(떨어져) + part(부분) → 부분으로 떨어져 → 따로, 떨어져',
      'apartment': 'apart(따로) + ment → 따로 나눠 놓은 방 → 아파트',
      'depart': 'de(떨어져) + part(나누다) → 갈라져 나가다 → 출발하다',
      'department store': 'department(나뉜 부서) + store(가게) → 부서별로 나뉜 가게 → 백화점',
      'participate': 'parti(부분) + cip(취하다) → 한 부분을 맡다 → 참여하다',
      'particle': 'part(부분) + icle(작은) → 아주 작은 부분 → 입자',
      'partner': 'part(부분) + ner → 몫을 나누는 사람 → 동반자'
    }
  },
  {
    r: 'gen', m: '태어나다, 낳다',
    tip: '"태어남"이 뿌리. 태어날 때 지닌 것이면 재능, 타고난 그대로면 진짜예요.',
    w: {
      'gene': 'gen(낳다) → 낳아 물려주는 것 → 유전자',
      'generate': 'gen(낳다) + ate → 낳아 만들어 내다 → 발생시키다',
      'generation': 'generate(낳다) + ion → 낳아진 무리 → 세대',
      'genius': 'gen(태어나다) → 태어날 때 지니고 나온 재능 → 천재',
      'genuine': 'gen(태어나다) + uine → 타고난 그대로의 → 진짜의',
      'indigenous': 'indi(안에서) + gen(태어난) → 그 땅에서 태어난 → 토착의'
    }
  },
  {
    r: 'val', m: '가치가 있다, 힘이 있다',
    tip: '"값어치"가 뿌리. 값을 매기면 평가, 값이 살아 있으면 유효한 게 돼요.',
    w: {
      'value': 'val(가치) + ue → 가치, 가치를 매기다',
      'evaluate': 'e(밖으로) + valu(가치) + ate → 가치를 매겨 내다 → 평가하다',
      'valid': 'val(힘이 있다) + id → 힘이 살아 있는 → 유효한, 타당한',
      'available': 'a(~로) + vail(가치·힘이 있다) + able → 쓸 수 있는 힘이 있는 → 이용할 수 있는'
    }
  },
  {
    r: 'fin', m: '끝, 경계',
    tip: '"끝·경계"가 뿌리. 경계를 그어 주면 정의(define)가 되고, 끝내면 finish예요.',
    w: {
      'finish': 'fin(끝) + ish → 끝내다',
      'finally': 'fin(끝) + ally → 끝에 가서 → 마침내',
      'final': 'fin(끝) + al → 마지막의',
      'define': 'de(딱) + fine(경계) → 경계를 딱 그어 주다 → 정의하다',
      'confine': 'con(함께) + fine(경계) → 경계 안에 가두다 → 제한하다, 가두다'
    }
  },
  {
    r: 'pend · pens', m: '매달다, 달아서 재다',
    tip: '옛날엔 저울에 매달아 돈을 쟀어요. 그래서 "매달다"에서 돈 쓰는 말이 여럿 나왔어요.',
    w: {
      'depend': 'de(아래에) + pend(매달다) → 아래에 매달려 있다 → 의존하다',
      'depend on': 'de(아래에) + pend(매달다) → ~에 매달리다 → ~에 의존하다',
      'spend': 'ex(밖으로) + pend(달아 주다) → 저울에 달아 내주다 → (돈·시간을) 쓰다',
      'expensive': 'ex(밖으로) + pens(달아 재다) + ive → 많이 달아 내야 하는 → 비싼',
      'expense': 'ex(밖으로) + pens(달아 재다) → 달아 내준 것 → 비용',
      'compensate': 'com(함께) + pens(달아 재다) → 저울 양쪽을 맞추다 → 보상하다'
    }
  },
  {
    r: 'memor', m: '기억',
    tip: '기억이 뿌리. re(다시)가 붙으면 다시 떠올리는 게 돼요.',
    w: {
      'memory': 'memor(기억) + y → 기억, 추억',
      'memorize': 'memor(기억) + ize(~하게 하다) → 기억에 넣다 → 암기하다',
      'remember': 're(다시) + member(기억하다) → 다시 마음에 담다 → 기억하다'
    }
  },
  {
    r: 'serv', m: '지키다, 섬기다',
    tip: '지키고 섬긴다는 뜻. 함께 지키면 보존, 지켜보면 관찰이 돼요.',
    w: {
      'serve': 'serv(섬기다) → (음식을) 내주다, 봉사하다',
      'conserve': 'con(함께) + serve(지키다) → 온전히 지켜 두다 → 보존하다',
      'conservation': 'conserve(보존하다) + ation → 보존, 보호',
      'deserve': 'de(충분히) + serve(섬기다) → 충분히 섬긴 만큼 → ~을 받을 만하다',
      'observation': 'ob(~쪽을) + serv(지키다) + ation → 지켜봄 → 관찰'
    }
  },
  {
    r: 'sist · sta', m: '서다',
    tip: '"서 있다"가 뿌리. 어디에 서느냐로 뜻이 갈려요 — 맞서 서면 저항, 굳게 서면 안정이에요.',
    w: {
      'resist': 're(맞서) + sist(서다) → 맞서 버티고 서다 → 저항하다',
      'insist': 'in(위에) + sist(서다) → 그 자리에 딱 버티고 서다 → 주장하다',
      'consist': 'con(함께) + sist(서다) → 함께 서서 이루다 → ~로 이루어지다',
      'persist': 'per(끝까지) + sist(서다) → 끝까지 버티고 서다 → 계속되다, 고집하다',
      'stable': 'sta(서다) + ble → 잘 서 있는 → 안정된',
      'establish': 'e + sta(서다) + blish → 세워 놓다 → 설립하다',
      'station': 'sta(서다) + tion → 서서 머무는 곳 → 역, 정거장',
      'status': 'sta(서다) + tus → 서 있는 자리 → 지위, 상태'
    }
  },
  {
    r: 'tend · tens', m: '뻗다, 팽팽하게 당기다',
    tip: '"쭉 뻗다"가 뿌리. 마음을 뻗으면 주의를 기울이는 것, 팽팽히 당기면 긴장이 돼요.',
    w: {
      'attend': 'at(~쪽으로) + tend(뻗다) → 마음을 그쪽으로 뻗다 → 참석하다, 주의를 기울이다',
      'intend': 'in(~안으로) + tend(뻗다) → 마음을 그쪽으로 뻗다 → 의도하다',
      'pretend': 'pre(앞에) + tend(뻗다) → 앞에 내밀어 보이다 → ~인 척하다',
      'tendency': 'tend(뻗다) + ency → 뻗어 가는 방향 → 경향',
      'tension': 'tens(팽팽히 당기다) + ion → 팽팽함 → 긴장',
      'intense': 'in(안으로) + tense(팽팽한) → 바짝 당겨진 → 강렬한'
    }
  },
  {
    r: 'lect · leg', m: '고르다, 읽다',
    tip: '골라 모은다는 뜻. 골라 모으면 수집, 골라 뽑으면 선거예요.',
    w: {
      'collect': 'col(함께) + lect(고르다) → 골라 모으다 → 모으다',
      'election': 'e(밖으로) + lect(고르다) + ion → 골라 뽑음 → 선거',
      'lecture': 'lect(읽다) + ure → 읽어 주는 것 → 강의',
      'intellect': 'intel(사이에서) + lect(고르다) → 가려낼 줄 아는 힘 → 지성',
      'neglect': 'neg(아니다) + lect(고르다) → 골라 챙기지 않다 → 소홀히 하다'
    }
  },
  {
    r: 'graph · photo · geo', m: 'graph 그리다·쓰다 · photo 빛 · geo 땅',
    tip: '그리스어 조각들이에요. 빛으로 그리면 사진, 땅을 그리면 지리가 돼요.',
    w: {
      'photograph': 'photo(빛) + graph(그리다) → 빛으로 그린 것 → 사진',
      'photo': 'photo(빛) → 사진 (photograph의 줄임말)',
      'geography': 'geo(땅) + graph(그리다) → 땅을 그려 적은 학문 → 지리학',
      'paragraph': 'para(옆에) + graph(쓰다) → 옆에 표시해 나눈 덩어리 → 문단',
      'graphic': 'graph(그리다) + ic → 그림의, 생생한'
    }
  },
  {
    r: 'voc · vok', m: '부르다, 목소리',
    tip: '"부른다"가 뿌리. 밖으로 불러내면 떠올리게 하는 것, 앞으로 불러내면 자극하는 거예요.',
    w: {
      'vocabulary': 'voc(부르다) + abulary → 불러 쓰는 말들 → 어휘',
      'advocate': 'ad(~쪽으로) + voc(부르다) → 편들어 불러 주다 → 옹호하다',
      'evoke': 'e(밖으로) + voke(부르다) → 밖으로 불러내다 → (기억·감정을) 불러일으키다',
      'provoke': 'pro(앞으로) + voke(부르다) → 앞으로 불러내다 → 자극하다, 화나게 하다'
    }
  },
  {
    r: 'scrib · script', m: '쓰다',
    tip: '"쓴다"가 뿌리. 손으로 쓴 것이 manuscript(manu는 손)예요.',
    w: {
      'describe': 'de(따라서) + scribe(쓰다) → 죽 따라 적어 내려가다 → 묘사하다',
      'manuscript': 'manu(손) + script(쓴 것) → 손으로 쓴 것 → 원고',
      'ascribe': 'a(~에게) + scribe(쓰다) → ~의 것으로 적어 두다 → ~의 탓으로 돌리다'
    }
  },
  {
    r: 'sum', m: '취하다, 가지다',
    tip: '"집어 든다"가 뿌리. 미리 집어 들면 짐작, 다 써서 없애면 소비예요.',
    w: {
      'assume': 'as(~쪽으로) + sume(취하다) → 그렇다고 받아들이다 → 가정하다, 추측하다',
      'assumption': 'assume(가정하다) + tion → 가정, 추측',
      'consume': 'con(모두) + sume(취하다) → 다 써 버리다 → 소비하다',
      'presume': 'pre(미리) + sume(취하다) → 미리 그렇다고 받아들이다 → 추정하다'
    }
  },
  {
    r: 'astro · aster', m: '별',
    tip: '별을 뜻해요. 옛날엔 별자리가 나쁘면 재앙이 온다고 믿어서 disaster가 생겼어요.',
    w: {
      'astronaut': 'astro(별) + naut(항해자) → 별을 항해하는 사람 → 우주비행사',
      'disaster': 'dis(나쁜) + aster(별) → 별자리가 나쁨 → 재앙, 재난'
    }
  },
  {
    r: 'auto', m: '스스로',
    tip: '"스스로"라는 뜻. 스스로 움직이면 자동차, 스스로 다스리면 자율이에요.',
    w: {
      'automatic': 'auto(스스로) + matic(움직이는) → 스스로 움직이는 → 자동의',
      'automation': 'auto(스스로) + mation → 스스로 하게 만듦 → 자동화',
      'automobile': 'auto(스스로) + mobile(움직이는) → 스스로 움직이는 것 → 자동차',
      'autonomy': 'auto(스스로) + nomy(다스림) → 스스로 다스림 → 자율, 자치'
    }
  },
  {
    r: '-logy · log', m: '말, 학문',
    tip: '뒤에 붙어 "~에 대한 학문"을 만들어요. 앞의 조각이 무엇에 대한 학문인지 알려줘요.',
    w: {
      'technology': 'techno(기술) + logy(학문) → 기술에 대한 학문 → 과학기술',
      'ideology': 'ideo(생각) + logy(학문) → 생각의 체계 → 이념',
      'apology': 'apo(떨어져) + logy(말) → 자기 잘못에서 벗어나려는 말 → 사과'
    }
  }
];

// 단어 → { 뿌리, 분해설명 } 색인 (소문자 기준)
const ETYM_INDEX = {};
ETYM_ROOTS.forEach((g, gi) => {
  for (const w in g.w) ETYM_INDEX[w.toLowerCase()] = { gi, why: g.w[w] };
});
