<script>
	import myIcon from '$lib/images/u-sho_icon.jpg';
</script>

<svelte:head>
	<title>私について | u-sho</title>
	<meta name="description" content="u-shoの基本情報とかのぺーじ" />
</svelte:head>

<div class="text-column">
	<header class="header">
		<img src={myIcon} alt="" />
		<h1>u-sho</h1>
	</header>

	<article>
		<h2>Profile</h2>
		<p>u-sho / 読み方は決めていませんが「ゆーしょー」が多いです。</p>
		<p>胡乱なことだけ言って生きていきたい。</p>
		<h3>Region</h3>
		<ul>
			<li>
				<span class="date">2016/04</span>&ndash;<span class="date">current</span> 東京都調布市
			</li>
			<li>
				<span class="date">2013/04</span>&ndash;<span class="date">2016/03</span> 青藍寮（沖縄県島尻郡南風原町）
			</li>
			<li>
				<span class="date">1998/01</span>&ndash;<span class="date">2013/03</span> 沖縄県宮古島市（旧平良市）
			</li>
		</ul>
		<h3>Organization</h3>
		<h4>Official</h4>
		<ul>
			<li>
				<span class="date">2022/04</span>&ndash;<span class="date">current</span> 国立大学法人電気通信大学大学院情報理工学研究科情報・ネットワーク工学専攻
			</li>
			<li>
				<span class="date">2017/04</span>&ndash;<span class="date">2022/03</span> 国立大学法人電気通信大学情報理工学域Ⅱ類電子情報学プログラム
			</li>
			<li>
				<span class="date">2016/04</span>&ndash;<span class="date">2017/03</span> 国立大学法人電気通信大学情報理工学域Ⅱ類
			</li>
			<li>
				<span class="date">2013/04</span>&ndash;<span class="date">2016/03</span> 沖縄県立開邦高等学校理数科
			</li>
		</ul>
		<h4>Unofficial</h4>
		<ul>
			<li>
				<span class="date">2022/02</span>&ndash;<span class="date">current</span>
				<a href="https://sites.google.com/gl.cc.uec.ac.jp/q-base/">UEC Quantum Base</a>
			</li>
			<li>
				<span class="date">2018/04</span>&ndash;<span class="date">current</span>
				<a href="https://twitter.com/ueccp">電通大競プロサークル</a>
			</li>
			<li>
				<span class="date">2017/07</span>&ndash;<span class="date">current</span>
				<a href="https://sites.google.com/view/uec-okinawa/">電気通信大学沖縄県人会</a>
			</li>
			<li>
				<span class="date">2016/04</span>&ndash;<span class="date">current</span>
				<a href="https://twitter.com/dentsuigobu">電気通信大学囲碁部</a>
			</li>
			<li>
				<span class="date">2017/10</span>&ndash;<span class="date">2018/05</span>
				<a href="https://ueqareer.connpass.com/event/48562/">CodePBL</a>運営
			</li>
			<li>
				<span class="date">2016/04</span>&ndash;<span class="date">2018/03</span>
				<a href="https://twitter.com/uecst">電気通信大学水泳部</a>
			</li>
			<li>
				<span class="date">2016/04</span>&ndash;<span class="date">2017/03</span>
				<a href="https://twitter.com/liveinspace">LiS</a>
			</li>
		</ul>
		<h2>Favorite</h2>
		<h3>Novel</h3>
		<h4>Author</h4>
		<ul>
			<li>
				ダレン・シャン (Darren Shan)（<a href="https://www.shogakukan.co.jp/author/4149?sort=old"
					>小学館著者ページ</a
				>，<a href="https://darrenshan.com/">公式サイト</a>）
			</li>
			<li>上橋菜穂子（<a href="https://uehashi.com/">公式サイト</a>）</li>
			<li>
				あさのあつこ（<a href="https://ja.wikipedia.org/wiki/あさのあつこ#著作リスト"
					>Wikipedia著作リスト</a
				>）
			</li>
			<li>
				クリフ・マクニッシュ (Cliff McNish)（<a
					href="https://ja.wikipedia.org/wiki/クリフ・マクニッシュ#著作リスト"
					>Wikipedia著作リスト</a
				>，<a href="https://www.cliffmcnish.com/">公式サイト</a>）
			</li>
			<li>
				西尾維新 (NISIOISIN)（<a
					href="https://bookclub.kodansha.co.jp/search?_ft=author&_sw=西尾維新">講談社書籍検索</a
				>）
			</li>
			<li>
				有川ひろ（有川浩）（<a href="https://honto.jp/netstore/search/au_1001827346.html"
					>honto書籍一覧</a
				>）
			</li>
			<li>
				住野よる（<a href="https://www.shinchosha.co.jp/writer/5798/">新潮社著者プロフィール</a>）
			</li>
			<li>
				エミリー・ロッダ (Emily Rodda)（<a
					href="https://ja.wikipedia.org/wiki/エミリー・ロッダ#著作リスト">Wikipedia著作リスト</a
				>，<a href="http://www.emilyrodda.com/">公式サイト</a>）
			</li>
		</ul>
		<h4>Translator</h4>
		<ul>
			<li>金原瑞人 (Mizuhito Kanehara)（<a href="https://kanehara.jp">公式サイト</a>）</li>
		</ul>
		<h4>Title</h4>
		<ul>
			<li>
				『ネシャン・サーガ』ラルフ・イーザウ 作，酒寄進一 訳，佐竹美保 イラスト，<a
					href="http://www.asunaroshobo.co.jp/home/series/neschan/">あすなろ書房</a
				>
			</li>
			<li>
				『バーティミアス』ジョナサン・ストラウド 著，金原瑞人，松山美保 共訳，理論社（<a
					href="https://www.sayzansha.com/search/g13184.html">静山社（文庫版）</a
				>，<a href="http://www.bartimaeusbooks.com/">BARTIMAEUS公式サイト</a>）
			</li>
			<li>『星の王子さま』サン＝テグジュペリ（河野万里子 訳）</li>
			<li>『とある飛空士』犬村小六，小学館ガガガ文庫</li>
			<li>『しにがみのバラッド。』ハセガワケイスケ，電撃文庫</li>
			<li>『ハリー・ポッター』J.K.ローリング，静山社</li>
		</ul>
		<h4>Web</h4>
		<ul>
			<li>
				『<a href="https://syosetu.org/novel/160391/">ハリー・ポッターと合理主義の方法</a>』E S
				Yudkowsky（ポット＠翻訳）
			</li>
			<li>
				<!-- eslint-disable no-irregular-whitespace -->
				『<a href="https://ncode.syosetu.com/n4830bu/"
					>本好きの下剋上　～司書になるためには手段を選んでいられません～</a
				>』<a href="https://mypage.syosetu.com/372556/">香月 美夜</a>
			</li>
			<li>
				『<a href="https://ncode.syosetu.com/n9669bk/">無職転生　- 異世界行ったら本気だす -</a
				>』理不尽な孫の手
				<!-- eslint-enable no-irregular-whitespace -->
			</li>
			<li>
				『<a href="https://ncode.syosetu.com/n7945fn/">ダンジョンができて３年（web版）</a>』之 貫紀
			</li>
			<li>『<a href="https://estar.jp/series/6513294">最強人種</a>』子猫だよ・ω・</li>
		</ul>
		<h3>Manga</h3>
		<ul>
			<li>『うしおととら』藤田和日郎</li>
			<li>『HUNTER×HUNTER』冨樫義博</li>
			<li>『化物語』大暮維人（原作：西尾維新）</li>
			<li>『ヒカルの碁』小畑健（原作：ほったゆみ，監修：梅澤由香里）</li>
			<li>『ドラゴンボール』鳥山明</li>
			<li>『東京喰種』石田スイ</li>
			<li>『ブルーピリオド』山口つばさ</li>
		</ul>
		<h3>Film</h3>
		<ul>
			<li>
				『レ・ミゼラブル』2012年（<a href="https://www.youtube.com/watch?v=VoCGLi82O7I">予告編</a>）
			</li>
			<li>
				『おんなのこきらい』2015年（<a href="https://twitter.com/onnanoko_kirai"
					>Twitterアカウント</a
				>）
			</li>
		</ul>
		<h3>Song</h3>
		<h4>Group</h4>
		<ul>
			<li>
				ふぇのたす（<a href="https://www.youtube.com/@phenotastube">YouTubeチャンネル</a>，<a
					href="https://twitter.com/phenotas">Twitterアカウント</a
				>）
			</li>
			<li>
				SHE IS SUMMER（<a href="https://www.youtube.com/channel/UC9_JZbqYadsNWEiHFBJ1MiQ"
					>YouTubeチャンネル</a
				>，<a href="https://she-is-summer.com/">公式サイト</a>）
			</li>
			<li>
				<ruby
					>杏<rp>(</rp><rt>アン</rt><rp>)</rp>窪<rp>(</rp><rt>ア</rt><rp>)</rp>彌<rp>(</rp><rt
						>ミン</rt
					><rp>)</rp></ruby
				>
				(un amin)（<a href="http://www.un-amin.com/">公式サイト</a>）
			</li>
			<li>ずっと真夜中でいいのに</li>
			<li>back number</li>
			<li>Hump back</li>
			<li>YOASOBI</li>
			<li>ヨルシカ</li>
			<li>703号室</li>
			<li>パニパニガールズ</li>
			<li>パニパニJr.</li>
			<li>欅坂46</li>
		</ul>
		<h4>Lyricist</h4>
		<ul>
			<li>ヤマモトショウ</li>
			<li>下地勇</li>
			<li>尾崎豊</li>
			<li>あいみょん</li>
		</ul>
		<h4>Singer</h4>
		<ul>
			<li>Ado</li>
			<li>中森明菜</li>
			<li>山口百恵</li>
			<li>髙橋真梨子</li>
		</ul>
		<h3>Software</h3>
		<h4>Smartphone App</h4>
		<ul>
			<li>「ターゲットの友 英単語アプリ」旺文社（開発：OpenDNA）</li>
			<li>「Temple Run」Imangi Studios</li>
			<li>「TikTok」ByteDance</li>
		</ul>
		<h4>Web Development</h4>
		<ul>
			<li>Vue.js 2</li>
			<li>ESLint</li>
			<li>TypeScript</li>
			<li>jQuery</li>
		</ul>
		<h4>Editor</h4>
		<ul>
			<li>atom</li>
		</ul>
		<h4>Language</h4>
		<ul>
			<li>C</li>
			<li>Rust</li>
			<li>HTML/XML/SVG/CSS</li>
			<li>(La)TeX</li>
			<li>Markdown</li>
		</ul>
		<h2>Navigation</h2>
		<ul>
			<li><a href="https://twitter.com/u_sho_engineer">𝕏/Twitter</a></li>
			<li><a href="https://github.com/u-sho">GitHub</a></li>
			<li><a href="https://qiita.com/u-sho">Qiita</a></li>
		</ul>
	</article>
</div>

<style>
	.header {
		margin: 2rem auto;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		& img {
			object-fit: cover;
			border-radius: 50%;
			width: 200px;
			transition: transform 1s ease;

			&:hover {
				transform: rotateY(180deg);
			}
		}

		& h1 {
			font-weight: bold;
			text-align: center;
			width: 200px;
		}
	}

	h2 {
		font-weight: bold;
		font-size: 1.5rem;
	}

	.date {
		font-family: monospace;
		font-weight: bold;
		font-size: 1rem;
	}
</style>
