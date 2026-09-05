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
  }
];

// 단어 → { 뿌리, 분해설명 } 색인 (소문자 기준)
const ETYM_INDEX = {};
ETYM_ROOTS.forEach((g, gi) => {
  for (const w in g.w) ETYM_INDEX[w.toLowerCase()] = { gi, why: g.w[w] };
});
