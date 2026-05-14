const concepts = [
  {
    id: "w1-foundations",
    week: "Week 1",
    title: "数据科学与统计的角色",
    summary: "数据科学用计算和统计从大量、多样的数据中得出有用结论。统计学负责处理不完整信息下的不确定性，是探索、预测、推断三条主线的基础。",
    bullets: ["Exploration: 用图表和描述统计发现模式", "Prediction: 用已知信息预测未知结果", "Inference: 判断样本中的模式能否推广到新观察"],
    tags: ["data science", "exploration", "prediction", "inference"]
  },
  {
    id: "w1-data-basics",
    week: "Week 1",
    title: "数据、案例、变量与数据矩阵",
    summary: "数据矩阵中，行是案例或观察单位，列是变量。变量分为分类变量和数量变量，分类变量又分 nominal 与 ordinal，数量变量又分 discrete 与 continuous。",
    bullets: ["Case: 被观察的单位", "Variable: 会变化的特征", "Constant: 所有案例都相同的特征", "DataFrame: Python/Pandas 中的表格结构"],
    tags: ["case", "variable", "data matrix", "DataFrame"]
  },
  {
    id: "w1-missing",
    week: "Week 1",
    title: "原始数据、验证与缺失值",
    summary: "真实数据常有错误码、缺失值和导入问题。验证数据要用基本统计与已知代码本对照，清洗时常把 97/98/99 一类特殊码替换成 NaN。",
    bullets: ["Raw data: 未处理数据", "Validation: 检查导入和编码是否正确", "Cleaning: 处理错误码、缺失值并创建新变量"],
    tags: ["NaN", "validation", "cleaning"]
  },
  {
    id: "w2-sampling",
    week: "Week 2",
    title: "总体、样本、参数与统计量",
    summary: "总体是研究对象的完整集合，样本是被实际观察的一部分。参数描述总体，统计量描述样本；推断统计用样本信息推断总体。",
    bullets: ["Parameter: population measure", "Statistic: sample measure", "Inference: 从样本推广到总体"],
    tags: ["population", "sample", "parameter", "statistic"]
  },
  {
    id: "w2-bias",
    week: "Week 2",
    title: "轶事证据与抽样偏差",
    summary: "轶事证据常受样本太小、选择偏差、确认偏差和记忆错误影响。代表性样本和概率抽样能降低系统性偏差。",
    bullets: ["Non-response bias: 不回应者与回应者不同", "Response bias: 回答不真实或迎合研究者", "Convenience samples 通常不能代表总体"],
    tags: ["bias", "anecdotal evidence", "non-response"]
  },
  {
    id: "w2-methods",
    week: "Week 2",
    title: "抽样方法",
    summary: "简单随机抽样让每个个体有相同机会。分层抽样先按相似群体分层再层内随机。整群抽样随机抽若干群体并调查群内所有人，多阶段抽样再在选中群体中抽样。",
    bullets: ["SRS: 避免抽样偏差的黄金标准", "Stratified: 确保重要子群体被代表", "Cluster/Multistage: 节省时间和成本"],
    tags: ["SRS", "stratified", "cluster", "multistage"]
  },
  {
    id: "w2-experiments",
    week: "Week 2",
    title: "观察研究、实验与因果",
    summary: "观察研究能发现 association，但容易受混杂变量影响。随机实验通过控制、随机分配、重复、区组、安慰剂和盲法更有能力建立 causation。",
    bullets: ["Confounder: 同时影响解释变量和响应变量的第三变量", "Association does not imply causation", "Double-blind: 参与者和研究者都不知道分组"],
    tags: ["observational", "experiment", "confounding", "causation"]
  },
  {
    id: "w2-python",
    week: "Week 2",
    title: "Python 与 Jupyter 工作流",
    summary: "Jupyter/Colab 把代码、文本和输出放在同一文档。NumPy 做数值计算，Pandas 管理表格数据，Matplotlib 画图。",
    bullets: ["read_csv/read_fwf: 读取数据", "shape/head/columns: 初步检查", "Series: 单列数据结构"],
    tags: ["Jupyter", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    id: "w3-eda",
    week: "Week 3",
    title: "EDA 工作流",
    summary: "探索性数据分析用可视化和摘要统计发现模式、异常和数据质量问题。基本流程是 read → validate/clean → summarize → visualize → interpret。",
    bullets: ["inspect: 看结构", "classify: 判断变量类型", "clean: 处理缺失和重复", "interpret: 用领域知识解释"],
    tags: ["EDA", "workflow", "anomaly"]
  },
  {
    id: "w3-categorical",
    week: "Week 3",
    title: "分类变量总结",
    summary: "分类变量用频数表、比例和条形图总结。名义变量没有自然顺序，通常按频数排序能让图更易读。",
    bullets: ["value_counts(dropna=False): 包含 NaN 计数", "Relative frequency: count / n", "Bar chart: 分类分布的常用图"],
    tags: ["frequency", "proportion", "bar chart"]
  },
  {
    id: "w3-center-spread",
    week: "Week 3",
    title: "中心、离散与异常值",
    summary: "均值容易被偏态和异常值拉动，中位数更稳健。方差和标准差衡量围绕均值的离散程度，IQR 衡量中间 50% 的范围且抗异常值。",
    bullets: ["Mean: arithmetic average", "Median: 50th percentile", "IQR = Q3 - Q1", "1.5 × IQR rule: 标记箱线图异常值"],
    tags: ["mean", "median", "variance", "IQR", "outlier"]
  },
  {
    id: "w3-visual",
    week: "Week 3",
    title: "直方图、密度与箱线图",
    summary: "连续数值变量常用直方图。若 bin 宽度不等，y 轴必须用 density 而不是 raw counts，满足面积原则。箱线图展示五数概括和异常值。",
    bullets: ["Area principle: 面积代表比例", "density=True: Python 直方图关键参数", "Bimodal: 可能混合了两个子群体"],
    tags: ["histogram", "density", "box plot", "modality"]
  },
  {
    id: "w4-probability",
    week: "Week 4",
    title: "概率、样本空间与事件",
    summary: "概率是随机过程长期重复中某结果出现的比例。样本空间包含所有可能结果，事件是样本空间的子集。大数定律说明观察次数增多时样本比例趋近真实概率。",
    bullets: ["Disjoint: 两事件不能同时发生", "Complement: P(not A) = 1 - P(A)", "Equally likely: 有利结果数 / 全部结果数"],
    tags: ["probability", "sample space", "event", "LLN"]
  },
  {
    id: "w4-rules",
    week: "Week 4",
    title: "加法、乘法与条件概率",
    summary: "互斥事件的 or 概率可以相加，独立事件的 and 概率可以相乘。若事件不独立，要用条件概率 P(A|B) 表示已知 B 发生时 A 的概率。",
    bullets: ["Disjoint addition: P(A or B)=P(A)+P(B)", "Independent multiplication: P(A and B)=P(A)P(B)", "Conditional probability updates available information"],
    tags: ["addition rule", "multiplication rule", "conditional"]
  },
  {
    id: "w4-bayes",
    week: "Week 4",
    title: "Bayes 直觉与 Monty Hall",
    summary: "Bayes 思维是在观察新信息后更新原先信念。Monty Hall 中主持人的开门行为提供了信息，因此 switching 更有利。",
    bullets: ["Prior: 看到数据前的信念", "Posterior: 根据数据更新后的信念", "100 doors: 初选门获胜概率仍很小，换门获得剩余概率"],
    tags: ["Bayes", "posterior", "Monty Hall"]
  },
  {
    id: "w4-rv",
    week: "Week 4",
    title: "随机变量、PMF 与期望",
    summary: "随机变量把随机过程结果变成数值。离散随机变量可用 PMF 表示每个可能值的概率，期望值是按概率加权的平均。",
    bullets: ["PMF probabilities sum to 1", "E(X)=sum xP(x)", "Expectation 是分布的平衡点"],
    tags: ["random variable", "PMF", "expected value"]
  },
  {
    id: "w4-simulation",
    week: "Week 4",
    title: "模拟估计概率",
    summary: "模拟用随机重复实验估计概率，特别适合复杂场景。NumPy 的 random choice 可以生成随机抽取，重复次数越多估计越稳定。",
    bullets: ["np.random.choice(array, size)", "Simulation approximates probability", "重复次数增加，模拟比例更稳定"],
    tags: ["simulation", "numpy.random", "approximation"]
  },
  {
    id: "w5-normal",
    week: "Week 5",
    title: "正态分布、标准化与经验法则",
    summary: "正态分布由均值 μ 和方差 σ² 控制，曲线关于均值对称。Z-score 表示某值离均值多少个标准差，标准正态分布是 N(0,1)。",
    bullets: ["z = (x - μ) / σ", "68-95-99.7 rule", "norm.cdf: 计算左侧面积或区间概率"],
    tags: ["normal", "z-score", "CDF", "empirical rule"]
  },
  {
    id: "w5-qq",
    week: "Week 5",
    title: "Q-Q Plot 与非正态数据",
    summary: "Q-Q plot 比较经验分位数与理论正态分位数；若点接近直线，数据可近似正态。右偏数据可能适合 lognormal，取对数后更接近正态。",
    bullets: ["Q-Q straight line: normal-like", "Curved pattern: non-normal", "Log transform handles proportionate growth"],
    tags: ["Q-Q plot", "lognormal", "normality"]
  },
  {
    id: "w5-discrete",
    week: "Week 5",
    title: "Binomial 与 Poisson 模型",
    summary: "二项分布用于固定 n 次独立试验中成功次数，成功概率 p 不变。泊松分布用于固定时间或空间区间内稀有事件个数，参数 λ 是平均发生率。",
    bullets: ["Binomial: fixed n, independent, constant p", "Poisson: event count in interval", "Discrete models use PMF"],
    tags: ["binomial", "Poisson", "PMF"]
  },
  {
    id: "w5-clt",
    week: "Week 5",
    title: "样本均值、平方根定律与 CLT",
    summary: "多次抽样得到的样本均值会形成自己的分布。样本均值的标准误随 n 的平方根下降；中心极限定理说明大样本均值近似正态，即使原总体不正态。",
    bullets: ["Variance of sample mean decreases with n", "To double accuracy, need 4x sample size", "CLT rule of thumb: n ≥ 30"],
    tags: ["sample mean", "square root law", "CLT", "standard error"]
  }
];

const conceptMeta = {
  "w1-foundations": ["Role of Statistics in Data Science", "数据科学与统计的角色"],
  "w1-data-basics": ["Cases, Variables, and Data Matrices", "案例、变量与数据矩阵"],
  "w1-missing": ["Raw Data, Validation, and Missing Values", "原始数据、验证与缺失值"],
  "w2-sampling": ["Population, Samples, Parameters, and Statistics", "总体、样本、参数与统计量"],
  "w2-bias": ["Anecdotal Evidence and Sampling Bias", "轶事证据与抽样偏差"],
  "w2-methods": ["Sampling Methods", "抽样方法"],
  "w2-experiments": ["Observational Studies, Experiments, and Causation", "观察研究、实验与因果"],
  "w2-python": ["Python and Jupyter Workflow", "Python 与 Jupyter 工作流"],
  "w3-eda": ["EDA Workflow", "EDA 工作流"],
  "w3-categorical": ["Summarizing Categorical Variables", "分类变量总结"],
  "w3-center-spread": ["Center, Spread, and Outliers", "中心、离散与异常值"],
  "w3-visual": ["Histograms, Density, and Box Plots", "直方图、密度与箱线图"],
  "w4-probability": ["Probability, Sample Spaces, and Events", "概率、样本空间与事件"],
  "w4-rules": ["Addition, Multiplication, and Conditional Probability", "加法、乘法与条件概率"],
  "w4-bayes": ["Bayesian Intuition and Monty Hall", "Bayes 直觉与 Monty Hall"],
  "w4-rv": ["Random Variables, PMFs, and Expectation", "随机变量、PMF 与期望"],
  "w4-simulation": ["Simulation for Probability", "模拟估计概率"],
  "w5-normal": ["Normal Distribution, Z-Scores, and Empirical Rule", "正态分布、标准化与经验法则"],
  "w5-qq": ["Q-Q Plots and Non-Normal Data", "Q-Q Plot 与非正态数据"],
  "w5-discrete": ["Binomial and Poisson Models", "Binomial 与 Poisson 模型"],
  "w5-clt": ["Sample Means, Square Root Law, and CLT", "样本均值、平方根定律与 CLT"]
};

concepts.forEach(concept => {
  const meta = conceptMeta[concept.id];
  concept.zhTitle = meta?.[1] || concept.title;
  concept.title = meta?.[0] || concept.title;
});

const questions = [
  ["w1-foundations","统计学在数据科学中最核心的作用是什么？",["让所有数据都变成正态分布","在不完整信息下量化不确定性并支持推断","替代编程和领域知识","只负责画漂亮图表"],1,"统计学的核心任务是用样本或不完整信息对总体和未来情形做稳健结论。"],
  ["w1-foundations","Exploration 的主要目标是：",["预测未来精确数值","总结数据、寻找模式和检查异常","证明因果关系","训练神经网络"],1,"Exploration 主要用描述统计和可视化发现数据模式。"],
  ["w1-foundations","Inference 关注的是：",["样本模式是否能推广到新观察或总体","怎样把 CSV 读入 Python","怎样让模型过拟合训练集","怎样删除所有缺失值"],0,"推断强调不确定性和样本到总体的推广。"],
  ["w1-foundations","Prediction 最贴近下面哪件事？",["用历史数据预测未知或未来结果","判断变量是 nominal 还是 ordinal","计算箱线图的 IQR","清除重复行"],0,"Prediction 用已知信息对未知结果做 informed guesses。"],
  ["w1-data-basics","数据矩阵中，每一行通常代表：",["一个变量","一个案例或观察单位","一个统计量","一个代码库"],1,"Rows = cases/observational units。"],
  ["w1-data-basics","数据矩阵中，每一列通常代表：",["一个变量","一个总体","一个实验组","一个随机数种子"],0,"Columns = variables。"],
  ["w1-data-basics","“学生身高”最适合归类为：",["Nominal categorical","Ordinal categorical","Continuous quantitative","Constant"],2,"身高是有意义数值，并可取连续范围。"],
  ["w1-data-basics","“最高学历：高中、本科、硕士、博士”属于：",["Nominal","Ordinal","Continuous","Constant"],1,"它有自然顺序，但等级间距离不一定相等。"],
  ["w1-data-basics","“出生州/省份”通常属于：",["Nominal categorical","Ordinal categorical","Discrete quantitative","Continuous quantitative"],0,"州/省是无自然顺序的标签。"],
  ["w1-data-basics","“兄弟姐妹数量”通常属于：",["Continuous quantitative","Discrete quantitative","Nominal categorical","Constant"],1,"它是计数型数值，只能按整数跳变。"],
  ["w1-data-basics","研究中所有受试者都来自同一所大学，则“大学名称”对该研究来说是：",["变量","常量","样本均值","混杂变量"],1,"所有案例相同的特征是 constant。"],
  ["w1-missing","Pandas 中缺失值常表示为：",["NaN","INF","NULLSET","MISSING_ROW_ONLY"],0,"课件强调 NaN 表示 Not a Number。"],
  ["w1-missing","数据验证的主要目的是什么？",["让数据看起来更大","比较基本统计与已知结果以发现导入错误","删除所有分类变量","把均值改成中位数"],1,"Validation 用来确认数据导入和编码没有出错。"],
  ["w1-missing","把 97/98/99 这类特殊回答码替换成 NaN 属于：",["数据清洗","随机抽样","标准化","二项建模"],0,"这是典型 data cleaning。"],
  ["w1-missing","Raw data 指的是：",["已经完成模型训练的数据","收集后尚未处理的数据","只包含正态变量的数据","没有任何缺失值的数据"],1,"Raw data 是未加工处理的数据。"],
  ["w2-sampling","Parameter 描述的是：",["样本","总体","某一行数据","Python 函数参数"],1,"统计学中 parameter 是 population measure。"],
  ["w2-sampling","Statistic 描述的是：",["样本","总体","所有可能结果","理论分布"],0,"Statistic 是 sample measure。"],
  ["w2-sampling","用样本平均数估计总体平均数属于：",["描述变量类型","推断统计","数据可视化","盲法设计"],1,"从样本推广总体就是 inference。"],
  ["w2-sampling","总体和样本的关系是：",["样本包含总体","总体是样本的一部分","样本是总体的一部分","两者完全无关"],2,"Sample 是 population 的子集。"],
  ["w2-bias","轶事证据不可靠的常见原因不包括：",["样本太小","选择偏差","确认偏差","严格随机抽样"],3,"严格随机抽样反而能降低偏差。"],
  ["w2-bias","Non-response bias 指的是：",["问题措辞诱导受访者","不参加者与参加者系统性不同","研究者不知道分组","样本量太大"],1,"不回应者如果与回应者不同，就会造成非回应偏差。"],
  ["w2-bias","Response bias 最贴近哪种情况？",["受访者为了迎合社会规范而不真实回答","抽样框覆盖了所有总体成员","研究者随机分配治疗","变量之间完全独立"],0,"Response bias 是回答本身不真实或受诱导。"],
  ["w2-bias","Convenience sample 最大的问题通常是：",["成本太高","不一定代表总体","无法产生任何数据","一定会得到正态分布"],1,"方便样本容易有抽样偏差。"],
  ["w2-methods","简单随机抽样 SRS 的特征是：",["每个总体成员有相同被抽中机会","只抽最容易联系的人","先选几个城市再全调查","按研究者偏好分配"],0,"SRS 是避免抽样偏差的黄金标准。"],
  ["w2-methods","Stratified sampling 的做法是：",["把总体分成相似层，再层内随机抽样","随机选几个多样群体并调查全部成员","只访问志愿者","按结果变量排序后取前几名"],0,"分层抽样先分 strata 再层内 SRS。"],
  ["w2-methods","Cluster sampling 更适合：",["总体分散、需要节约成本的情况","每个个体都必须独立编号且全部调查","变量全是连续变量时","只能用于正态数据"],0,"整群抽样常用于节省时间和成本。"],
  ["w2-methods","Multistage sampling 与 cluster sampling 的关键差异是：",["多阶段在选中群体内继续抽样","多阶段不随机","多阶段只能抽一个人","多阶段不适合大总体"],0,"Multistage 是 selected clusters 内再抽样。"],
  ["w2-experiments","观察研究通常能较好说明：",["因果关系","变量间关联","治疗必然有效","样本必然代表总体"],1,"Observational studies reveal associations。"],
  ["w2-experiments","Association does NOT imply causation 的核心原因是：",["所有变量都是分类变量","可能存在混杂变量","样本量总是太大","图表不能展示关系"],1,"混杂变量会同时影响解释变量和响应变量。"],
  ["w2-experiments","Confounding variable 是：",["同时与解释变量和响应变量有关的第三变量","完全随机的误差项","只有一个取值的常量","图表的标题"],0,"Confounder 也称 lurking variable。"],
  ["w2-experiments","随机分配 treatment 的主要作用是：",["让样本更小","平衡潜在混杂因素","制造 response bias","保证所有人获得安慰剂"],1,"Randomization 有助于平衡已知和未知混杂因素。"],
  ["w2-experiments","Double-blind study 中不知道分组的是：",["只有参与者","只有研究者","参与者和与其互动的研究者","数据表的列名"],2,"双盲能降低参与者 placebo effect 和研究者偏差。"],
  ["w2-experiments","Blocking 的含义是：",["按已知重要变量先分组，再组内随机","阻止数据进入研究","删除异常值","让参与者不知道分组"],0,"Blocking 先按已知变量分块再随机。"],
  ["w2-python","Pandas 主要用于：",["表格数据管理与分析","画 3D 游戏","生成随机密码","网页部署"],0,"课件把 pandas 作为 tabular data 核心库。"],
  ["w2-python","df.shape 返回：",["前 5 行","行数和列数","所有列名","每个值的频数"],1,"shape 用于检查 DataFrame 维度。"],
  ["w2-python","df.head() 的用途是：",["查看前几行以初步验证导入","计算标准差","随机抽样","绘制箱线图"],0,"head() 显示前 5 行。"],
  ["w2-python","Series 在 Pandas 中通常表示：",["单列数据","整张图表","一个 PDF 页面","总体参数"],0,"Series 是一列或一维序列。"],
  ["w3-eda","EDA 的主要目的是什么？",["直接证明因果","用可视化和摘要统计发现模式和异常","只计算 p-value","强制所有变量变成分类变量"],1,"EDA 是探索模式、异常和数据质量。"],
  ["w3-eda","课件中的 EDA 流程顺序最接近：",["read → validate/clean → summarize → visualize","visualize → delete → guess → publish","randomize → blind → placebo → infer","normalize → binomial → poisson → CLT"],0,"这是 Week 3 的核心工作流。"],
  ["w3-eda","df.duplicated().sum() 常用于检查：",["重复行","正态性","样本空间大小","条件概率"],0,"它统计重复记录数量。"],
  ["w3-categorical","分类变量最常用的摘要是：",["频数和比例","均值和标准差","Z-score","Q-Q plot"],0,"Categorical summaries 用 counts/proportions。"],
  ["w3-categorical","value_counts(dropna=False) 中 dropna=False 的作用是：",["包含 NaN 计数","删除 NaN","把 NaN 当作均值","排序变量"],0,"这能看到缺失值数量。"],
  ["w3-categorical","名义分类变量画条形图时，常建议：",["按频数排序","按均值排序","必须按字母倒序","必须使用 density=True"],0,"Nominal categories 无自然顺序，按频数更易读。"],
  ["w3-center-spread","均值相比中位数更容易受到什么影响？",["异常值和偏态","样本空间","随机种子","变量名称长度"],0,"Mean 会被长尾和极端值拉动。"],
  ["w3-center-spread","高度右偏的数据，通常更稳健的中心指标是：",["中位数","均值","最大值","样本量"],0,"Median 对 outliers 更 resistant。"],
  ["w3-center-spread","IQR 的公式是：",["Q3 - Q1","mean - median","max - min","variance / n"],0,"IQR 表示中间 50% 的范围。"],
  ["w3-center-spread","标准差的单位与原变量相比：",["相同","平方单位","没有单位","一定是百分比"],0,"标准差是方差开方，回到原单位。"],
  ["w3-center-spread","1.5 × IQR rule 用来：",["在箱线图中识别异常值","计算贝叶斯后验","判断事件互斥","模拟随机选择"],0,"箱线图常用上下 fences 标记 outlier。"],
  ["w3-visual","直方图最适合展示：",["连续数值变量的分布","无序分类标签","实验盲法","总体参数定义"],0,"Histogram 是连续数值分布的主要图形。"],
  ["w3-visual","如果 histogram 的 bin 宽度不等，y 轴应使用：",["density","raw count","category name","sample id"],0,"面积原则要求用 density。"],
  ["w3-visual","Area principle 的含义是：",["二维图形中面积应代表数量或比例","颜色越深越准确","所有柱子必须等宽","x 轴必须是时间"],0,"直方图概率由 bar area 表示。"],
  ["w3-visual","Bimodal histogram 通常暗示：",["可能混合了两个子群体","数据一定无误","变量是 nominal","概率为 0"],0,"双峰常说明存在两个不同 subgroup。"],
  ["w3-visual","箱线图展示的核心是：",["五数概括和异常值","样本空间","Bayes rule","Python 包版本"],0,"Box plot 显示 min/Q1/median/Q3/max 和 outliers。"],
  ["w4-probability","概率的长期频率解释是：",["无限重复随机过程时某结果出现的比例","某事件一定会发生","所有结果都同样重要","样本量越小越准确"],0,"Probability 是 long-run proportion。"],
  ["w4-probability","Sample space 是：",["所有可能结果的集合","已经发生的一个结果","样本均值集合","分类变量的柱状图"],0,"样本空间包含 random process 的所有 outcomes。"],
  ["w4-probability","Event 是：",["样本空间的子集","总体的平均值","一个 Python 包","所有变量的集合"],0,"事件是 outcomes 的集合。"],
  ["w4-probability","大数定律说明：",["观察次数越多，样本比例趋近真实概率","样本量越大偏差一定越大","概率不能被估计","所有数据都会正态"],0,"LLN 连接模拟比例和真实概率。"],
  ["w4-probability","Complement rule 是：",["P(not A)=1-P(A)","P(A and B)=P(A)+P(B)","P(A)=P(B)","P(A|B)=P(B|A)"],0,"补集概率常能简化计算。"],
  ["w4-rules","互斥事件 A 和 B 的 P(A or B) 等于：",["P(A)+P(B)","P(A)P(B)","P(A)-P(B)","P(A)/P(B)"],0,"Disjoint outcomes 使用加法规则。"],
  ["w4-rules","独立事件 A 和 B 的 P(A and B) 等于：",["P(A)+P(B)","P(A)P(B)","P(A|B)+P(B)","1-P(A)"],1,"Independent events 使用乘法规则。"],
  ["w4-rules","若知道 B 已发生，再问 A 的概率，应写作：",["P(A|B)","P(B|A)","P(A and not B)","P(A)+P(B)"],0,"P(A|B) 读作 probability of A given B。"],
  ["w4-rules","两个事件 independent 的含义是：",["知道一个事件结果不会改变另一个事件的信息","它们不能同时发生","它们概率相等","它们一定属于分类变量"],0,"Independence 是信息上无帮助。"],
  ["w4-bayes","Bayesian 更新中的 prior 是：",["看到数据前的信念","看到数据后的信念","样本空间","标准差"],0,"Prior belief 是 data 前的概率信念。"],
  ["w4-bayes","Posterior 是：",["根据新数据更新后的信念","随机变量的名字","总样本数","直方图面积"],0,"Posterior belief 是 observe data 后的更新。"],
  ["w4-bayes","Monty Hall 问题中建议换门的关键原因是：",["主持人开门提供了新信息","门的颜色改变了概率","三扇门概率永远相等","换门能消除所有随机性"],0,"主持人的行为不是无信息动作。"],
  ["w4-bayes","100 doors 解释中，最初选中的门中奖概率约为：",["1/100","1/2","98/100","99/100"],0,"初选概率很小，剩余概率集中到可换的门。"],
  ["w4-rv","随机变量的特点是：",["随机过程产生的数值结果","只能是分类标签","一定服从正态分布","只能取 0 和 1"],0,"Random variable 是 numerical outcome。"],
  ["w4-rv","PMF 用于表示：",["离散分布中各可能值的概率","连续曲线下的面积密度","箱线图的五数概括","DataFrame 的行数"],0,"Probability Mass Function 用于 discrete distribution。"],
  ["w4-rv","一个合法 PMF 的概率总和必须：",["等于 1","等于样本量","大于 10","等于均值"],0,"PMF normalized means sum to 1。"],
  ["w4-rv","期望值 E(X) 本质上是：",["按概率加权的平均","最大可能值","最小可能值","一定出现的结果"],0,"Expected value 是 weighted average。"],
  ["w4-simulation","np.random.choice(array_name) 默认表示：",["从数组中等概率随机选一个元素","计算数组均值","把数组排序","绘制概率密度曲线"],0,"Week 4 课件用它模拟随机选择。"],
  ["w4-simulation","模拟估计概率时，重复次数增加通常会：",["让估计更稳定","让真实概率改变","让所有事件互斥","让变量变成连续变量"],0,"由大数定律，重复越多比例越稳定。"],
  ["w4-simulation","模拟方法最适合：",["复杂概率情境的近似估计","证明所有样本无偏","替代所有数据清洗","删除所有异常值"],0,"Simulation estimates probabilities computationally。"],
  ["w5-normal","正态分布 X~N(μ,σ²) 中 μ 控制：",["中心位置","样本量","事件数量","分层数量"],0,"μ 是 mean，平移中心。"],
  ["w5-normal","σ² 在正态分布中控制：",["分布离散程度","总体大小","分类顺序","抽样框"],0,"Variance controls spread。"],
  ["w5-normal","Z-score 表示：",["某值距离均值多少个标准差","某分类出现多少次","样本空间大小","二项试验次数"],0,"Standard units 用标准差度量距离。"],
  ["w5-normal","标准正态分布的参数是：",["均值 0，方差 1","均值 1，方差 0","均值 0，方差 0","均值 100，方差 15"],0,"Z~N(0,1)。"],
  ["w5-normal","经验法则中约 95% 的数据落在：",["均值 ±2σ","均值 ±1σ","均值 ±3σ","均值以上所有区域"],0,"68-95-99.7 rule。"],
  ["w5-normal","norm.cdf(x, loc=mu, scale=sigma) 给出：",["x 左侧概率","x 右侧概率的两倍","PMF 精确概率","IQR"],0,"CDF 是 cumulative probability to the left。"],
  ["w5-qq","Q-Q plot 中点接近直线通常说明：",["数据近似正态","数据一定是分类变量","样本量为 0","均值等于 1"],0,"正态数据的经验分位数与理论分位数接近线性。"],
  ["w5-qq","Q-Q plot 的 y 轴通常是：",["排序后的经验数据","理论标准正态分位数","分类频数","样本编号"],0,"课件写的是 sorted empirical measurements。"],
  ["w5-qq","右偏且比例增长的数据可能适合：",["Lognormal distribution","Uniform labels","Cluster sample","Double blind"],0,"Lognormal 对 proportionate growth 常见。"],
  ["w5-qq","对 lognormal 数据取 logarithm 后通常会：",["更接近正态","变成 nominal 变量","删除所有 outlier","让 λ 加倍"],0,"课件强调 log transform 可转为 normal-like。"],
  ["w5-discrete","Binomial distribution 适合：",["固定 n 次独立成功/失败试验的成功次数","连续身高分布","任意分类变量排序","缺失值检测"],0,"二项模型条件：fixed n, independent, constant p。"],
  ["w5-discrete","二项模型要求每次试验成功概率：",["保持不变","不断增加","必须为 0.5","必须未知"],0,"Constant p 是 binomial 条件。"],
  ["w5-discrete","Poisson distribution 适合：",["固定时间或空间区间内事件次数","两个均值比较","箱线图异常值","任意连续测量"],0,"Poisson models event counts in interval。"],
  ["w5-discrete","Poisson 分布的参数 λ 表示：",["平均事件发生率","样本标准差","成功概率","分层数量"],0,"λ 是 average event rate。"],
  ["w5-discrete","二项和泊松这类离散模型通常使用：",["PMF","PDF only","Q-Q only","bar sorting only"],0,"离散变量用概率质量函数。"],
  ["w5-clt","样本均值的分布指的是：",["重复抽样得到的均值形成的分布","原始数据的所有分类标签","一次抽样的最大值","所有缺失值分布"],0,"Many sample means form their own distribution。"],
  ["w5-clt","Square Root Law 表示：",["样本均值精度随 sqrt(n) 改善","样本量越大越偏","均值等于中位数","所有数据必须独立同分布"],0,"标准误与 sqrt(n) 在分母有关。"],
  ["w5-clt","若想让样本均值精度提高 2 倍，样本量大约需要：",["变为 4 倍","变为 2 倍","减少一半","保持不变"],0,"平方根定律：精度 2x 需要 n 4x。"],
  ["w5-clt","中心极限定理 CLT 说明：",["大样本的和或平均值分布近似正态","原始数据一定正态","所有事件都独立","分类变量一定有序"],0,"CLT 是推断的基础。"],
  ["w5-clt","CLT 常用经验样本量阈值是：",["n ≥ 30","n = 2","n ≤ 5","n = 10000 only"],0,"课件给出 rule of thumb n≥30。"],
  ["w5-clt","CLT 失效的常见条件包括：",["相关数据或无限方差","样本量大于 30","变量有均值","使用 Python"],0,"课件列出 correlated data 和 infinite variance。"],
  ["w5-clt","样本量增加时，样本均值分布通常会：",["更窄、更高，围绕总体均值","更偏离总体均值","变成分类变量","无法计算"],0,"模拟 CLT 中 n 增大，spread 变小。"],
  ["w5-normal","正态曲线在 x=μ 处：",["达到最大密度","概率为 1","一定有异常值","变成离散点"],0,"正态 PDF 在均值处最高。"],
  ["w3-center-spread","Variance 的直观含义是：",["平方偏差的平均","中间 50% 范围","最常见值","分类比例"],0,"方差是 squared deviations 的平均。"],
  ["w2-experiments","Placebo/control group 的主要作用是：",["提供比较基准并控制安慰剂效应","增加 response bias","保证所有人都接受新治疗","删除混杂变量"],0,"对照组让 treatment effect 有可比较对象。"],
  ["w3-visual","连续分布中，某个精确点的概率通常是：",["0","1","取决于柱子颜色","等于样本量"],0,"连续变量概率看区间面积，精确点概率为 0。"],
  ["w1-foundations","领域知识在数据科学中的作用是：",["帮助提出合适问题并正确解释结果","让样本量自动变大","替代所有统计方法","保证没有缺失值"],0,"Context/domain knowledge 决定问题和解释是否合理。"],
  ["w2-methods","概率抽样相比方便抽样的优势是：",["更能避免抽样偏差","一定更便宜","不需要样本框","结果一定正态"],0,"Probability-based sampling 更能产生代表性样本。"],
  ["w3-categorical","Relative frequency 的计算是：",["count / total n","mean / std","Q3 - Q1","P(A)P(B)"],0,"比例是频数除以样本总数。"],
  ["w4-rules","如果事件 A 和 B 互斥，它们：",["不能同时发生","必然独立","概率必须相等","必须都是连续变量"],0,"Disjoint/mutually exclusive means cannot both happen。"]
].map((q, i) => ({ id: `q${i + 1}`, conceptId: q[0], prompt: q[1], options: q[2], answer: q[3], explanation: q[4], difficulty: 2, zh: "" }));

const englishQuestionBank = [
  ["w1-foundations", "A data scientist finds a pattern in a sample and wants to know whether it is likely to appear in future observations. Which pillar is being used?", ["Exploration", "Prediction", "Inference", "Data cleaning"], 2, "Inference quantifies uncertainty when generalizing beyond the observed sample.", 2, "推断：判断样本规律能否推广。"],
  ["w1-foundations", "Which statement best separates prediction from inference?", ["Prediction asks whether a pattern is real; inference forecasts unknown values.", "Prediction forecasts unknown values; inference quantifies uncertainty about a broader claim.", "Both only describe past data.", "Inference never uses samples."], 1, "Prediction targets unknown outcomes; inference targets uncertainty and generalization.", 4, "预测重结果，推断重不确定性。"],
  ["w1-foundations", "A model predicts customer churn accurately but the team cannot explain why it works. What is the main missing ingredient from the course perspective?", ["A larger monitor", "Domain knowledge and interpretation", "More nominal variables", "A smaller sample"], 1, "Statistics and computation still require domain context to ask and interpret the right questions.", 5, "领域知识帮助解释结果。"],
  ["w1-data-basics", "In a table of 2,000 students with columns for age, major, GPA, and graduation status, what is one case?", ["One student", "The GPA column", "The whole university", "The mean GPA"], 0, "Rows are cases; columns are variables.", 1, "行是案例，列是变量。"],
  ["w1-data-basics", "Which variable is ordinal rather than nominal?", ["Blood type", "Country of birth", "Satisfaction level: low, medium, high", "Student ID"], 2, "Ordinal categories have a meaningful order but uneven distances.", 2, "有顺序但距离不固定。"],
  ["w1-data-basics", "A variable stores the number of support tickets submitted by each user. How should it be classified?", ["Nominal categorical", "Ordinal categorical", "Discrete quantitative", "Continuous quantitative"], 2, "It is a count, so it is quantitative and discrete.", 2, "计数是离散数量变量。"],
  ["w1-missing", "A survey encodes 'refused to answer' as 99. Before computing the mean, what should usually happen?", ["Keep 99 as a real value", "Replace 99 with NaN if it is a special missing code", "Sort the column alphabetically", "Convert the column to a bar chart"], 1, "Special non-numeric response codes can distort summaries unless converted to missing values.", 3, "特殊缺失码要转成 NaN。"],
  ["w1-missing", "A dataset imports with 10,000 rows, but the codebook says there should be 12,500. Which step detects this issue?", ["Data validation", "Bayesian updating", "Poisson modeling", "Blinding"], 0, "Validation compares computed checks with expected external references.", 3, "验证导入是否正确。"],
  ["w2-sampling", "A poll reports the average income of 800 sampled voters. The reported average is a:", ["Parameter", "Statistic", "Population", "Sampling frame"], 1, "A statistic describes a sample; a parameter describes the population.", 1, "样本指标是 statistic。"],
  ["w2-sampling", "A researcher wants to estimate the true average income of all voters. The true average is a:", ["Statistic", "Parameter", "Case", "Series"], 1, "A parameter is the unknown population quantity.", 1, "总体指标是 parameter。"],
  ["w2-bias", "An online poll about phone addiction is shared mostly in a productivity forum. What is the biggest concern?", ["The sample is probably not representative", "The responses are guaranteed independent", "The mean must equal the median", "The variable is continuous"], 0, "Self-selected or convenience samples often overrepresent certain groups.", 4, "方便样本可能不代表总体。"],
  ["w2-bias", "A health survey has low response from night-shift workers, who also have different sleep patterns. Which bias is most relevant?", ["Response bias", "Non-response bias", "Placebo effect", "Area principle"], 1, "Non-respondents differ systematically from respondents.", 4, "不回应者和回应者不同。"],
  ["w2-methods", "A university samples 50 students from each faculty to ensure engineering, business, arts, and science are represented. What design is this?", ["Simple random sampling", "Stratified sampling", "Cluster sampling", "Anecdotal evidence"], 1, "The population is divided into strata, then sampled within each stratum.", 3, "先分层再层内抽样。"],
  ["w2-methods", "A city randomly selects 10 apartment buildings and surveys every resident in those buildings. What design is this?", ["Cluster sampling", "Stratified sampling", "Simple random sampling", "Blocking"], 0, "Clusters are selected, then all cases in selected clusters are measured.", 3, "抽中整群并调查全部成员。"],
  ["w2-experiments", "A study finds coffee drinkers have higher productivity, but coffee drinkers also sleep less and work different jobs. What prevents a causal claim?", ["A confounding variable", "A PMF", "A Q-Q plot", "A constant"], 0, "Confounders are related to both the explanatory and response variables.", 4, "混杂变量阻碍因果解释。"],
  ["w2-experiments", "Why does random assignment help experiments make causal claims?", ["It guarantees a normal distribution", "It balances known and unknown confounders across groups in expectation", "It removes the need for a control group", "It changes a statistic into a parameter"], 1, "Randomization makes treatment groups comparable on average.", 5, "随机分配平衡混杂因素。"],
  ["w2-experiments", "Participants and clinicians both do not know who receives the real drug. This is:", ["Single-blind", "Double-blind", "Cluster sampling", "Response bias"], 1, "Double-blind means participants and interacting researchers are unaware of assignments.", 2, "双盲：双方都不知道分组。"],
  ["w2-experiments", "A trial groups patients by age group before randomizing treatment within each age group. What principle is being used?", ["Blocking", "Anecdotal evidence", "Non-response", "Density scaling"], 0, "Blocking controls a known variable before random assignment.", 5, "区组：先按已知变量分组。"],
  ["w2-python", "Which command is most appropriate for an initial check of table size after loading data?", ["df.shape", "df.mean()", "np.random.choice()", "norm.cdf()"], 0, "df.shape reports the number of rows and columns.", 1, "检查行列数。"],
  ["w2-python", "A single DataFrame column extracted as df['age'] is a:", ["Series", "Population", "Parameter", "Sample space"], 0, "A Pandas Series is a one-dimensional column-like structure.", 2, "单列是 Series。"],
  ["w3-eda", "Which sequence best describes an EDA workflow?", ["Read, validate, clean, summarize, visualize, interpret", "Predict, publish, randomize, blind", "Normalize, submit, memorize, delete", "Choose a p-value, then collect data"], 0, "EDA begins by understanding and checking data before interpretation.", 2, "EDA 基本流程。"],
  ["w3-categorical", "For a nominal variable with many categories, why sort a bar chart by frequency?", ["To make comparison easier because there is no natural order", "To make it continuous", "To satisfy the CLT", "To compute a z-score"], 0, "Nominal categories lack inherent ordering, so frequency sorting improves readability.", 3, "名义变量无自然顺序。"],
  ["w3-categorical", "A category count is 45 out of 300 observations. What is the relative frequency?", ["0.15", "6.67", "255", "345"], 0, "45 / 300 = 0.15.", 3, "比例 = 频数 / 总数。"],
  ["w3-center-spread", "A salary distribution has a few extremely high earners. Which center is usually more robust?", ["Mean", "Median", "Maximum", "Variance"], 1, "The median is less affected by extreme outliers.", 3, "偏态时中位数更稳健。"],
  ["w3-center-spread", "Q1 = 18 and Q3 = 42. What is the IQR?", ["24", "60", "30", "12"], 0, "IQR = Q3 - Q1 = 42 - 18 = 24.", 3, "IQR = Q3 - Q1。"],
  ["w3-center-spread", "If Q1 = 10 and Q3 = 30, what is the upper outlier fence using the 1.5 x IQR rule?", ["40", "50", "60", "70"], 2, "IQR = 20, so upper fence = 30 + 1.5(20) = 60.", 5, "上界 = Q3 + 1.5IQR。"],
  ["w3-visual", "Why can raw histogram counts mislead when bin widths are unequal?", ["Wider bins collect more observations simply because they cover more range", "Counts are never useful", "The mean becomes undefined", "The bars become ordinal"], 0, "Unequal widths require density so area, not height alone, represents proportion.", 5, "宽 bin 会天然收集更多数据。"],
  ["w3-visual", "In a density histogram, a bin has width 5 and contains 20% of observations. What should its height be?", ["0.04", "4", "25", "0.25"], 0, "Height = percent in bin / bin width = 0.20 / 5 = 0.04.", 6, "高度 = 比例 / 宽度。"],
  ["w3-visual", "A histogram shows two clear peaks. What is a reasonable next question?", ["Are there two subgroups mixed together?", "Is every value missing?", "Is the variable nominal?", "Is the probability exactly one?"], 0, "Bimodality often indicates mixed subpopulations.", 4, "双峰可能有两个子群体。"],
  ["w4-probability", "A fair die is rolled once. What is P(rolling an even number)?", ["1/6", "1/3", "1/2", "2/3"], 2, "Even outcomes are {2,4,6}, so 3/6 = 1/2.", 2, "有利结果 / 全部结果。"],
  ["w4-probability", "If P(A)=0.72, what is P(not A)?", ["0.28", "0.72", "1.72", "0"], 0, "Complement rule: 1 - 0.72 = 0.28.", 2, "补集规则。"],
  ["w4-rules", "A and B are disjoint with P(A)=0.20 and P(B)=0.35. What is P(A or B)?", ["0.07", "0.15", "0.55", "0.70"], 2, "For disjoint events, add probabilities: 0.20 + 0.35 = 0.55.", 3, "互斥事件相加。"],
  ["w4-rules", "A and B are independent with P(A)=0.4 and P(B)=0.5. What is P(A and B)?", ["0.1", "0.2", "0.4", "0.9"], 1, "For independent events, multiply: 0.4 x 0.5 = 0.2.", 3, "独立事件相乘。"],
  ["w4-rules", "A medical test is positive. You now ask the probability the patient has the disease given the positive test. Which notation matches?", ["P(positive | disease)", "P(disease | positive)", "P(disease and not positive)", "P(not disease)"], 1, "The condition after the vertical bar is the known information.", 4, "竖线后是已知条件。"],
  ["w4-bayes", "Why do many people answer the Monty Hall problem incorrectly?", ["They ignore that the host's action is informative", "They think doors are categorical", "They apply the IQR rule", "They use too many samples"], 0, "The host reveals information by deliberately opening losing doors.", 5, "主持人的行为提供信息。"],
  ["w4-rv", "A bookstore revenue variable has outcomes $0, $137, and $170 with probabilities 0.20, 0.55, and 0.25. What is E(X)?", ["$76.85", "$117.85", "$137.00", "$170.00"], 1, "0(0.20)+137(0.55)+170(0.25)=117.85.", 5, "期望是加权平均。"],
  ["w4-rv", "A PMF lists probabilities 0.1, 0.2, 0.3, and 0.5. What is wrong?", ["The total is greater than 1", "The values are discrete", "The expected value is impossible", "A PMF cannot have four outcomes"], 0, "A valid PMF must sum to exactly 1; here it sums to 1.1.", 4, "PMF 总和必须为 1。"],
  ["w4-simulation", "A simulation estimates a probability as 0.62 after 100 repetitions and 0.58 after 100,000 repetitions. Which estimate is usually more reliable?", ["0.62", "0.58", "They are equally reliable", "Neither can ever be used"], 1, "More repetitions usually reduce simulation noise by the law of large numbers.", 4, "重复越多越稳定。"],
  ["w5-normal", "A score has mean 70 and standard deviation 10. What is the z-score for 85?", ["0.5", "1.0", "1.5", "2.0"], 2, "z = (85 - 70) / 10 = 1.5.", 3, "z = (x - μ) / σ。"],
  ["w5-normal", "Using the empirical rule, about what percentage falls within 3 standard deviations of the mean?", ["68%", "90%", "95%", "99.7%"], 3, "The empirical rule is 68-95-99.7.", 2, "经验法则。"],
  ["w5-normal", "For X ~ N(100, 15^2), norm.cdf(130, loc=100, scale=15) gives:", ["P(X < 130)", "P(X = 130)", "P(X > 130)", "The PMF at 130"], 0, "The CDF returns cumulative probability to the left of x.", 4, "CDF 给左侧面积。"],
  ["w5-qq", "A Q-Q plot bends sharply upward in the right tail. What is the most reasonable interpretation?", ["The right tail is heavier than a normal model", "The variable is definitely nominal", "The sample size is zero", "The data are perfectly normal"], 0, "Curvature in a Q-Q plot indicates departure from normality, often tail behavior.", 6, "Q-Q 弯曲表示非正态。"],
  ["w5-qq", "Why might taking logs make a right-skewed variable look more normal?", ["It compresses large values from proportionate growth", "It removes all sampling error", "It changes counts into labels", "It guarantees causation"], 0, "Log transforms often handle multiplicative or proportionate growth.", 6, "取对数压缩右尾。"],
  ["w5-discrete", "Which situation fits a binomial model best?", ["Number of successful free throws out of 20 attempts with stable skill", "Height of students", "Time until the next bus arrives", "Number of goals in a season with changing teams and rules"], 0, "Binomial needs fixed n, independent trials, and constant p.", 4, "二项：固定次数、独立、p 不变。"],
  ["w5-discrete", "A call center averages 6 calls per hour and wants the probability of exactly 4 calls next hour. Which model is most natural?", ["Normal", "Poisson", "Stratified sampling", "Q-Q plot"], 1, "Poisson models event counts over a fixed interval using a rate λ.", 4, "泊松：固定区间事件次数。"],
  ["w5-discrete", "For a Poisson model, which assumption is most important?", ["Events occur independently at a stable average rate", "There is a fixed number of attempts", "Data are ordinal", "The median equals the mode"], 0, "Poisson uses a rate over an interval and assumes independent event occurrence.", 6, "泊松假设稳定率和独立事件。"],
  ["w5-clt", "Why does the CLT matter for inference?", ["It explains why sample means can be approximately normal even when raw data are not", "It makes every individual observation normal", "It eliminates the need for random sampling", "It proves all associations are causal"], 0, "The CLT is about sums or averages of large independent samples.", 5, "CLT 是样本均值近似正态。"],
  ["w5-clt", "If sample size increases from 100 to 400, the standard error of the mean changes by what factor?", ["It halves", "It doubles", "It stays the same", "It becomes four times larger"], 0, "Standard error is proportional to 1/sqrt(n); quadrupling n halves it.", 6, "样本量四倍，标准误减半。"],
  ["w5-clt", "Which condition can make the CLT unreliable?", ["Strongly correlated observations", "A sample size above 30", "Using a DataFrame", "A finite variance"], 0, "The CLT depends on independence or weak dependence and finite variance.", 7, "相关数据会破坏 CLT 条件。"],
  ["w3-center-spread", "A distribution has mean much greater than median. What shape is most likely?", ["Left-skewed", "Right-skewed", "Uniform", "Perfectly symmetric"], 1, "A right tail pulls the mean above the median.", 5, "右偏会拉高均值。"],
  ["w2-experiments", "A company tests a new app layout only on users who voluntarily opt in. Which statement is most defensible?", ["The result may be biased because opt-in users can differ from regular users", "It proves the layout caused all changes", "It is automatically double-blind", "It is a simple random sample"], 0, "Voluntary participation can create selection bias.", 6, "自愿参与可能造成选择偏差。"],
  ["w4-bayes", "A rare disease has low prevalence. Even with a good test, why can many positive results be false positives?", ["The prior probability of disease is small", "P(A or B) must equal 1", "The sample space is empty", "The test result is continuous"], 0, "Bayesian reasoning combines test accuracy with the base rate or prior.", 8, "低基率会影响后验概率。"],
  ["w3-visual", "A density curve has total area 1. What represents P(10 < X < 20)?", ["The area under the curve between 10 and 20", "The height at X=15 only", "The number of bins", "The maximum value"], 0, "For continuous distributions, probabilities are areas over intervals.", 4, "连续概率看区间面积。"],
  ["w5-normal", "A value has z = -2.4. Which statement is most accurate?", ["It is 2.4 standard deviations below the mean", "It is 2.4 units below the mean", "It must be impossible", "It is the median"], 0, "A z-score is measured in standard deviation units.", 3, "z 分数单位是标准差。"],
  ["w1-foundations", "A dashboard shows summaries and plots but makes no claim beyond the observed data. Which pillar is most dominant?", ["Exploration", "Inference", "Causation", "Blocking"], 0, "Summaries and plots of observed data are exploratory.", 2, "描述和可视化属于探索。"],
  ["w2-methods", "A sampling plan divides voters by age group and samples within each group because age is politically important. Why is this useful?", ["It improves subgroup representation", "It removes all measurement error", "It guarantees causation", "It turns age into a constant"], 0, "Stratification helps ensure key subgroups are included.", 5, "分层保证子群体代表性。"],
  ["w5-clt", "A highly skewed flight-delay population has mean 16.6 minutes. Many samples of size 400 are taken. Where should the sampling distribution of means be centered?", ["Near 0", "Near 16.6", "Near the maximum delay", "Near the sample size"], 1, "The sampling distribution of the mean is centered at the population mean.", 5, "样本均值分布中心在总体均值。"]
];

questions.length = 0;
questions.push(...englishQuestionBank.map((q, i) => ({
  id: `q${i + 1}`,
  conceptId: q[0],
  prompt: q[1],
  options: q[2],
  answer: q[3],
  explanation: q[4],
  difficulty: q[5],
  zh: q[6]
})));

const extensionQuestions = [
  ["w4-bayes", "A disease affects 1% of people. A test is 99% sensitive and 95% specific. A person tests positive. Which intuition is best?", ["The person almost certainly has the disease because sensitivity is high", "False positives can dominate because the disease is rare", "Specificity is irrelevant", "The posterior must equal 99%"], 1, "With rare diseases, the base rate matters. Even a strong test can produce many false positives among the large non-diseased group.", 9, "低基率问题：先验概率很小，阳性不等于几乎患病。"],
  ["w5-clt", "A researcher samples 10,000 stock returns from the same market period where observations are strongly autocorrelated. Why should CLT-based inference be treated carefully?", ["Large n always fixes every issue", "Correlation violates the independence-style condition behind the usual CLT", "Autocorrelation makes the variable nominal", "The mean cannot be computed"], 1, "The usual CLT relies on independence or weak dependence; strong correlation reduces the effective information in the sample.", 9, "样本大不代表一定安全；相关性会降低有效样本量。"],
  ["w3-visual", "A histogram has two unequal bins: [0, 10) contains 30% and [10, 40) contains 45%. Which bin has the greater density height?", ["[0, 10), because 0.30/10 = 0.03", "[10, 40), because 0.45 is larger", "They are equal", "Density cannot be computed"], 0, "Density height is proportion divided by bin width. The first bin has height 0.03; the second has 0.45/30 = 0.015.", 9, "density 比较的是比例除以宽度，不是只看比例。"],
  ["w2-experiments", "A randomized experiment has severe noncompliance: many treatment-group subjects never take the treatment. What is the safest conclusion?", ["Random assignment still helps, but the treatment effect estimate may be diluted or require careful interpretation", "The study becomes a perfect observational study", "Causation is automatically impossible", "Blinding fixes noncompliance"], 0, "Randomization protects the assignment comparison, but noncompliance complicates interpretation of the actual treatment received.", 9, "随机分配仍有价值，但不遵从会影响解释。"],
  ["w5-discrete", "A factory counts defects per meter of fabric. The rate changes sharply from morning to afternoon. Why is a single Poisson model questionable?", ["Poisson requires a stable event rate over the interval", "Poisson cannot model counts", "Poisson requires fixed n trials", "Poisson is continuous"], 0, "A simple Poisson model assumes a constant rate; changing rates suggest a mixture or time-varying model.", 8, "泊松模型需要相对稳定的事件率。"],
  ["w2-sampling", "A sample is randomly selected from a list that excludes international students. Which issue remains even if the sampling from the list is random?", ["Coverage bias", "Double blinding", "The area principle", "A valid PMF"], 0, "Randomness within a flawed sampling frame cannot represent units missing from the frame.", 8, "抽样框缺人，框内随机也无法代表缺失群体。"],
  ["w5-normal", "Two datasets have identical mean and standard deviation, but one has a curved Q-Q plot and extreme right tail. What should you avoid?", ["Assuming the normal model is adequate based only on mean and SD", "Computing any summary statistics", "Using a table", "Checking a plot"], 0, "Mean and standard deviation are not enough to validate normality; Q-Q plots reveal distribution shape and tails.", 8, "均值和标准差一样，不代表分布形状一样。"],
  ["w4-rv", "A gamble has a positive expected value but a tiny chance of a catastrophic loss. What does expected value fail to communicate by itself?", ["Risk and variability of outcomes", "The sample space", "Whether probabilities sum to one", "The arithmetic formula"], 0, "Expected value summarizes the center, not the full distribution or downside risk.", 9, "期望值不等于风险完整描述。"],
  ["w1-foundations", "A highly accurate prediction system changes user behavior after deployment, making future data different from past data. Which broader data-science issue appears?", ["Feedback loop or distribution shift", "A nominal variable", "A simple complement rule", "A fixed parameter"], 0, "Prediction systems can alter the environment they measure, so historical patterns may not transfer unchanged.", 10, "模型上线后可能改变数据生成过程。"],
  ["w2-bias", "A survey weights responses to match age and gender, but all respondents came from one social-media platform. What is the best critique?", ["Weighting helps known variables but may not fix unmeasured selection bias", "Weighting guarantees causation", "The sample becomes double-blind", "The sample size becomes irrelevant"], 0, "Post-stratification can adjust measured imbalances, but it cannot fully solve selection on unmeasured traits.", 10, "加权只能修正已测变量，不能保证消除所有偏差。"],
  ["w5-clt", "A population has extremely heavy tails with no finite variance. What happens to the usual square-root law intuition?", ["It can fail because finite variance is a key CLT condition", "It becomes twice as strong", "It guarantees normal raw data", "It turns the mean into the median"], 0, "The common CLT and standard error formulas require finite variance.", 10, "无限方差会破坏常规 CLT 和标准误直觉。"],
  ["w3-center-spread", "A distribution is strongly right-skewed. After removing one extreme outlier, the mean changes a lot but the median barely changes. What lesson does this support?", ["Median is more resistant to outliers than mean", "Mean is always invalid", "IQR cannot be computed", "Skewness proves causation"], 0, "Outliers can strongly pull the mean, while the median is based on rank and is more robust.", 7, "中位数比均值更抗异常值。"]
];

questions.push(...extensionQuestions.map((q, i) => ({
  id: `q${questions.length + i + 1}`,
  conceptId: q[0],
  prompt: q[1],
  options: q[2],
  answer: q[3],
  explanation: q[4],
  difficulty: q[5],
  zh: q[6]
})));

questions.forEach(q => {
  q.type = questionType(q);
});

const state = {
  currentQuestion: null,
  practicePool: null,
  practiceSession: [],
  practiceIndex: 0,
  exam: null,
  stats: loadStats()
};

function questionType(q) {
  if (/what is|which statement|best separates|classified|represents|notation|definition|parameter|statistic/i.test(q.prompt)) return "Concept";
  if (/what is P|z-score|IQR|fence|height|relative frequency|expected|factor|percentage|cdf|probability/i.test(q.prompt)) return "Calculation";
  if (/study|survey|trial|researcher|company|factory|poll|sample|test|dataset|model|dashboard|distribution/i.test(q.prompt)) return "Scenario";
  if (q.difficulty >= 8) return "Extension";
  return "Application";
}

function loadStats() {
  const fallback = { answered: 0, correct: 0, byConcept: {}, wrong: {}, history: [] };
  try {
    return { ...fallback, ...(JSON.parse(localStorage.getItem("statsMidtermTrainer")) || {}) };
  } catch {
    return fallback;
  }
}

function saveStats() {
  localStorage.setItem("statsMidtermTrainer", JSON.stringify(state.stats));
}

function conceptById(id) {
  return concepts.find(c => c.id === id);
}

function questionsForSelection() {
  const selected = document.querySelector("#weekSelect").value;
  const difficulty = document.querySelector("#difficultySelect").value;
  const type = document.querySelector("#typeSelect").value;
  const concept = document.querySelector("#conceptSelect").value;
  const source = state.practicePool || questions;
  return source.filter(q => {
    const weekOk = selected === "all" || conceptById(q.conceptId).week === selected;
    if (!weekOk) return false;
    if (type !== "all" && q.type !== type) return false;
    if (concept !== "all" && q.conceptId !== concept) return false;
    if (difficulty === "all") return true;
    const [min, max] = difficulty.split("-").map(Number);
    return q.difficulty >= min && q.difficulty <= max;
  });
}

function switchView(viewId) {
  document.querySelectorAll(".tab").forEach(btn => btn.classList.toggle("active", btn.dataset.view === viewId));
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === viewId));
  if (viewId === "wrongView") renderWrongList();
  if (viewId === "statsView") renderStats();
}

function renderWeekSelect() {
  const select = document.querySelector("#weekSelect");
  [...new Set(concepts.map(c => c.week))].forEach(week => {
    const option = document.createElement("option");
    option.value = week;
    option.textContent = week;
    select.appendChild(option);
  });
}

function renderFilterSelects() {
  const typeSelect = document.querySelector("#typeSelect");
  [...new Set(questions.map(q => q.type))].sort().forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = `${type} · ${{
      Calculation: "计算",
      Concept: "概念",
      Scenario: "场景",
      Extension: "拓展",
      Application: "应用"
    }[type] || "题型"}`;
    typeSelect.appendChild(option);
  });

  const conceptSelect = document.querySelector("#conceptSelect");
  concepts.forEach(concept => {
    const option = document.createElement("option");
    option.value = concept.id;
    option.textContent = `${concept.title}`;
    conceptSelect.appendChild(option);
  });
}

function renderMindmap(activeId = "w1-foundations") {
  const board = document.querySelector("#mindmap");
  const weeks = [...new Set(concepts.map(c => c.week))];
  board.innerHTML = `
    <div class="roadmap-core">
      <strong>Full Knowledge Structure</strong>
      <span>Data → Design → EDA → Probability → Models → Inference</span>
      <small>课程主线：数据 → 设计 → 探索 → 概率 → 模型 → 推断</small>
    </div>
    <div class="tree-map">
      ${weeks.map((week, index) => `
        <details class="tree-week" open style="--accent:${["#2f6f58","#0f7c80","#315f9f","#8c5a22","#b13a33"][index]}">
          <summary>
            <strong>${week}</strong>
            <span>${["Foundation 基础", "Design 设计", "EDA 探索", "Probability 概率", "Models 模型"][index]}</span>
          </summary>
          ${concepts.filter(c => c.week === week).map(c => `
            <details class="tree-concept ${c.id === activeId ? "active" : ""}" ${c.id === activeId ? "open" : ""}>
              <summary data-id="${c.id}">
                <strong>${c.title}</strong>
                <span>${c.zhTitle}</span>
              </summary>
              <div class="tree-body">
                <p>${c.summary}</p>
                <ul>${c.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
                <div class="tag-row">${c.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
                <div class="tree-question-meta">
                  ${["Concept", "Calculation", "Scenario", "Application", "Extension"].map(type => {
                    const count = questions.filter(q => q.conceptId === c.id && q.type === type).length;
                    return count ? `<span>${type}: ${count}</span>` : "";
                  }).join("")}
                </div>
                <div class="button-row">
                  <button type="button" onclick="practiceConcept('${c.id}')">Drill</button>
                  <button class="ghost" type="button" onclick="openConcept('${c.id}')">Notes</button>
                </div>
              </div>
            </details>
          `).join("")}
        </details>
      `).join("")}
    </div>
  `;
  board.querySelectorAll(".tree-concept > summary").forEach(summary => {
    summary.addEventListener("click", () => {
      renderMapDetails(summary.dataset.id);
    });
  });
  renderMapDetails(activeId);
}

function renderMapDetails(id) {
  const c = conceptById(id);
  document.querySelector("#mapDetails").innerHTML = `
    <p class="eyebrow">${c.week}</p>
    <h3>${c.title}</h3>
    <p class="zh-note">${c.zhTitle}</p>
    <p>${c.summary}</p>
    <div class="tag-row">${c.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <div class="button-row" style="margin-top:14px">
      <button type="button" onclick="practiceConcept('${c.id}')">Drill This Concept</button>
      <button class="ghost" type="button" onclick="openConcept('${c.id}')">Open Notes</button>
    </div>
  `;
}

function renderConcepts() {
  const query = document.querySelector("#conceptSearch").value.trim().toLowerCase();
  const filtered = concepts.filter(c => {
    const haystack = [c.week, c.title, c.summary, c.tags.join(" "), c.bullets.join(" ")].join(" ").toLowerCase();
    return haystack.includes(query);
  });
  document.querySelector("#conceptGrid").innerHTML = filtered.map(c => `
    <article class="concept-card" id="${c.id}">
      <p class="eyebrow">${c.week}</p>
      <h3>${c.title}</h3>
      <p class="zh-note">${c.zhTitle}</p>
      <p>${c.summary}</p>
      <ul>${c.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      <div class="tag-row">${c.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="mini-actions">
        <button type="button" onclick="practiceConcept('${c.id}')">Drill Related Questions</button>
      </div>
    </article>
  `).join("");
}

function pickQuestion(pool = questionsForSelection()) {
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function resetPracticeSession(pool = questionsForSelection(), startIndex = 0) {
  state.practiceSession = [...pool];
  state.practiceIndex = Math.min(Math.max(startIndex, 0), Math.max(0, state.practiceSession.length - 1));
  renderPracticeQuestion();
}

function renderPracticeQuestion() {
  const q = state.practiceSession[state.practiceIndex] || null;
  const progress = document.querySelector("#practiceProgress");
  progress.textContent = state.practiceSession.length
    ? `Question ${state.practiceIndex + 1} / ${state.practiceSession.length}`
    : "Question 0 / 0";
  renderQuestion(q, "questionCard", "practice");
}

function goPractice(delta) {
  if (!state.practiceSession.length) return;
  state.practiceIndex = Math.min(Math.max(state.practiceIndex + delta, 0), state.practiceSession.length - 1);
  renderPracticeQuestion();
}

function renderQuestion(q, mountId = "questionCard", mode = "practice") {
  if (!q) {
    document.querySelector(`#${mountId}`).innerHTML = `
      <div class="empty-state">
        <h3>No questions match this filter.</h3>
        <p>Try another chapter or difficulty range. · 当前筛选没有题目，请换章节或难度。</p>
      </div>
    `;
    return;
  }
  state.currentQuestion = q;
  const c = conceptById(q.conceptId);
  const navHtml = mode === "practice" ? `
    <div class="big-nav">
      <button class="nav-btn prev-btn" type="button" onclick="goPractice(-1)" title="Previous question">
        <span class="nav-arrow">&#8592;</span>
        <span class="nav-label">上一题<br><small>Previous</small></span>
      </button>
      <span class="nav-info">${state.practiceSession.length ? `Question ${state.practiceIndex + 1} / ${state.practiceSession.length}` : ""}</span>
      <button class="nav-btn next-btn" type="button" onclick="goPractice(1)" title="Next question">
        <span class="nav-label">下一题<br><small>Next</small></span>
        <span class="nav-arrow">&#8594;</span>
      </button>
    </div>
  ` : mode === "exam" ? `
    <div class="big-nav">
      <button class="nav-btn prev-btn" type="button" onclick="goExam(-1)" title="Previous question">
        <span class="nav-arrow">&#8592;</span>
        <span class="nav-label">上一题<br><small>Previous</small></span>
      </button>
      <span class="nav-info">${state.exam ? `Question ${state.exam.index + 1} / ${state.exam.pool.length}` : ""}</span>
      <button class="nav-btn next-btn" type="button" onclick="goExam(1)" title="Next question">
        <span class="nav-label">下一题<br><small>Next</small></span>
        <span class="nav-arrow">&#8594;</span>
      </button>
    </div>
  ` : "";
  document.querySelector(`#${mountId}`).innerHTML = `
    <div class="question-meta">
      <span class="tag">${c.week}</span>
      <span class="tag">${c.title}</span>
      <span class="tag">${q.type}</span>
      <span class="tag level">Level ${q.difficulty}/10</span>
    </div>
    <h3>${q.prompt}</h3>
    <p class="zh-note">${q.zh || ""}</p>
    <div class="options">
      ${q.options.map((opt, i) => `<button class="option" type="button" data-index="${i}">${String.fromCharCode(65 + i)}. ${opt}</button>`).join("")}
    </div>
    <div class="feedback hidden"></div>
    ${navHtml}
  `;
  document.querySelectorAll(`#${mountId} .option`).forEach(btn => {
    btn.addEventListener("click", () => {
      if (mode === "exam") selectExamAnswer(Number(btn.dataset.index));
      else answerPractice(q, Number(btn.dataset.index), mountId);
    });
  });
}

function answerPractice(q, choice, mountId) {
  const correct = choice === q.answer;
  recordAnswer(q, correct, choice);
  paintAnswer(mountId, q, choice);
  refreshStats();
}

function paintAnswer(mountId, q, choice) {
  const card = document.querySelector(`#${mountId}`);
  card.querySelectorAll(".option").forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    if (i === choice && i !== q.answer) btn.classList.add("wrong");
  });
  const feedback = card.querySelector(".feedback");
  feedback.classList.remove("hidden");
  feedback.innerHTML = `<strong>${choice === q.answer ? "Correct." : "Review this one."}</strong> ${q.explanation}<br><span class="zh-note">${q.zh || ""}</span>`;
}

function recordAnswer(q, correct, choice) {
  const c = conceptById(q.conceptId);
  state.stats.answered += 1;
  if (correct) state.stats.correct += 1;
  state.stats.byConcept[q.conceptId] ||= { answered: 0, correct: 0 };
  state.stats.byConcept[q.conceptId].answered += 1;
  if (correct) state.stats.byConcept[q.conceptId].correct += 1;
  if (!correct) {
    state.stats.wrong[q.id] = { questionId: q.id, choice, lastWrongAt: Date.now(), conceptId: q.conceptId };
  } else if (state.stats.wrong[q.id]) {
    state.stats.wrong[q.id].fixedCount = (state.stats.wrong[q.id].fixedCount || 0) + 1;
    if (state.stats.wrong[q.id].fixedCount >= 2) delete state.stats.wrong[q.id];
  }
  state.stats.history.unshift({ questionId: q.id, correct, conceptId: q.conceptId, week: c.week, at: Date.now() });
  state.stats.history = state.stats.history.slice(0, 300);
  saveStats();
}

function refreshStats() {
  const answered = state.stats.answered || 0;
  const accuracy = answered ? Math.round((state.stats.correct / answered) * 100) : 0;
  document.querySelector("#totalAnswered").textContent = answered;
  document.querySelector("#accuracy").textContent = `${accuracy}%`;
  document.querySelector("#wrongCount").textContent = Object.keys(state.stats.wrong || {}).length;
}

function practiceConcept(conceptId) {
  state.practicePool = questions.filter(q => q.conceptId === conceptId);
  switchView("practiceView");
  resetPracticeSession(state.practicePool);
}

function openConcept(conceptId) {
  switchView("reviewView");
  document.querySelector("#conceptSearch").value = conceptById(conceptId).title;
  renderConcepts();
  setTimeout(() => document.querySelector(`#${conceptId}`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 40);
}

function renderWrongList() {
  const wrongEntries = Object.values(state.stats.wrong || {});
  const wrong = wrongEntries.map(w => {
    const q = questions.find(q => q.id === w.questionId);
    return q ? { question: q, record: w } : null;
  }).filter(Boolean);
  document.querySelector("#wrongList").innerHTML = wrong.length ? wrong.map(({ question: q, record }) => {
    const c = conceptById(q.conceptId);
    const userChoice = record.choice;
    const correctAnswer = q.answer;
    const choiceLabels = ["A", "B", "C", "D"];
    const optionsHtml = q.options.map((opt, i) => {
      let cls = "wrong-option";
      let badge = "";
      if (i === correctAnswer && i === userChoice) {
        cls = "wrong-option correct-choice";
        badge = `<span class="choice-badge correct-badge">Correct &#10003;</span>`;
      } else if (i === correctAnswer) {
        cls = "wrong-option correct-choice";
        badge = `<span class="choice-badge correct-badge">Correct Answer &#10003;</span>`;
      } else if (i === userChoice) {
        cls = "wrong-option user-wrong-choice";
        badge = `<span class="choice-badge wrong-badge">Your Answer &#10007;</span>`;
      }
      return `<div class="${cls}"><span class="choice-letter">${choiceLabels[i]}.</span> ${opt} ${badge}</div>`;
    }).join("");

    const detailHtml = buildDetailedExplanation(q, c, userChoice, correctAnswer);

    return `
      <article class="wrong-item">
        <div class="wrong-item-header">
          <span class="tag">${c.week}</span>
          <span class="tag">${c.title}</span>
          <span class="tag level">Level ${q.difficulty}/10</span>
          <span class="tag type-tag">${q.type}</span>
        </div>
        <h3 class="wrong-question-prompt">${q.prompt}</h3>
        <p class="zh-note">${q.zh || ""}</p>
        <div class="wrong-options-list">
          ${optionsHtml}
        </div>
        <div class="wrong-detail">
          ${detailHtml}
        </div>
        <div class="button-row wrong-actions">
          <button type="button" onclick="practiceSpecific('${q.id}')">Redo This Question</button>
          <button class="ghost" type="button" onclick="openConcept('${q.conceptId}')">Review Concept</button>
        </div>
      </article>
    `;
  }).join("") : `<div class="exam-start"><p>Your mistake book is empty. Wrong answers will appear here and disappear after you answer them correctly twice.</p><p class="zh-note">错题本现在是空的。做错会自动加入，连续做对两次会自动移出。</p></div>`;
}

function buildDetailedExplanation(q, c, userChoice, correctAnswer) {
  const choiceLabels = ["A", "B", "C", "D"];
  const userLabel = choiceLabels[userChoice];
  const correctLabel = choiceLabels[correctAnswer];
  const userOptText = q.options[userChoice];
  const correctOptText = q.options[correctAnswer];

  let html = "";

  // Section 1: What the correct answer is and why
  html += `<div class="detail-section">`;
  html += `<h4>Why <span class="correct-inline">${correctLabel}. ${correctOptText}</span> is the correct answer</h4>`;
  html += `<p>${q.explanation}</p>`;
  html += `</div>`;

  // Section 2: Why the user's choice was wrong
  if (userChoice !== correctAnswer) {
    html += `<div class="detail-section">`;
    html += `<h4>Why your choice <span class="wrong-inline">${userLabel}. ${userOptText}</span> is incorrect</h4>`;
    html += `<p>${explainWhyWrong(q, userChoice)}</p>`;
    html += `</div>`;
  }

  // Section 3: Concept review
  html += `<div class="detail-section">`;
  html += `<h4>Key Concept: ${c.title}</h4>`;
  html += `<p class="concept-summary">${c.summary}</p>`;
  if (c.bullets && c.bullets.length) {
    html += `<ul>${c.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`;
  }
  html += `</div>`;

  // Section 4: Worked example for calculation/scenario types
  if (q.type === "Calculation" || q.type === "Scenario" || q.type === "Application") {
    html += `<div class="detail-section example-box">`;
    html += `<h4>Related Example</h4>`;
    html += `<p>${generateExample(q, c)}</p>`;
    html += `</div>`;
  }

  // Section 5: Study tip
  html += `<div class="detail-section tip-box">`;
  html += `<h4>Study Tip</h4>`;
  html += `<p>${getStudyTip(q, c)}</p>`;
  html += `</div>`;

  return html;
}

function explainWhyWrong(q, userChoice) {
  const correctAnswer = q.answer;
  const userOpt = q.options[userChoice];
  const correctOpt = q.options[correctAnswer];

  const templates = {
    reversal: `This option reverses the relationship. In statistics, direction matters: ${userOpt} states the opposite of what is true. The correct answer (${correctOpt}) correctly identifies the relationship.`,
    partial: `This option captures only part of the truth. While there may be a kernel of relevance, ${userOpt} misses critical nuance. A more complete understanding is: ${correctOpt}.`,
    confusion: `This is a common point of confusion. "${userOpt}" conflates two distinct statistical concepts. In this context, what we actually need is: ${correctOpt}.`,
    irrelevant: `This option is not relevant to the question. "${userOpt}" may sound plausible but doesn't address what is actually being asked. The correct approach is: ${correctOpt}.`,
    opposite: `This option states the exact opposite of the correct statistical principle. The truth is: ${correctOpt}. Remember to check the direction of the relationship.`,
  };

  if (userOpt.includes("not") || userOpt.includes("never") || userOpt.includes("no ")) {
    return templates.opposite + " Double-check negatives in statistics questions.";
  }
  if (userOpt.length < 20) {
    return templates.partial + " Short answers in multiple-choice questions are rarely complete answers.";
  }
  if (userOpt.includes("always") || userOpt.includes("every") || userOpt.includes("all ")) {
    return templates.opposite + " Be skeptical of absolute words like 'always' or 'every' in statistics.";
  }
  return templates.confusion + " Review the concept summary below to clarify this distinction.";
}

function generateExample(q, c) {
  const conceptId = q.conceptId;
  const examples = {
    "w3-center-spread": `Consider test scores: {65, 72, 78, 82, 85, 88, 92, 95, 98, 200}. The mean is 95.5 but the median is 86.5. The outlier (200) pulls the mean up by 9 points! This shows why the median is more "resistant" to outliers. In practice, always check both — large gaps between mean and median are a red flag for skewness.`,
    "w5-normal": `Suppose exam scores follow N(70, 10²). A student scoring 85 has z = (85-70)/10 = 1.5, meaning they are 1.5 standard deviations above average. Using the empirical rule: 68% score between 60-80, 95% between 50-90, and 99.7% between 40-100. The student is roughly at the 93rd percentile.`,
    "w4-probability": `Imagine rolling two fair dice. There are 6×6 = 36 equally likely outcomes. P(sum = 7) = 6/36 = 1/6 (six ways: {1,6}, {2,5}, {3,4}, {4,3}, {5,2}, {6,1}). P(sum = 2) = 1/36 (only {1,1}). This illustrates counting favorable outcomes divided by total outcomes.`,
    "w4-rules": `A jar has 5 red and 3 blue marbles. P(red) = 5/8 = 0.625. If you draw, replace, and draw again, the probability of two reds = 0.625 × 0.625 = 0.3906 (independent events multiply). If instead you draw two without replacement, P(both blue) = (3/8) × (2/7) = 6/56 ≈ 0.107 (adjust for removal).`,
    "w4-rv": `A game: pay $10 to play. Win $50 with probability 0.2, win $0 with probability 0.8. E(X) = 50(0.2) + 0(0.8) = $10. Since the expected payout equals the cost, it's a "fair game." If the cost were $12, the expected net loss would be $2 per play — don't play!`,
    "w5-clt": `Bus wait times are uniformly distributed between 0-20 minutes (mean=10, heavily non-normal). Take 100 sample means, each from n=50 waits. The histogram of those 100 means will be approximately normal, centered near 10, with standard error ≈ original_SD/√50. This is the CLT in action — the original shape doesn't matter for large n.`,
    "w2-sampling": `Suppose 60% of voters support policy A. A simple random sample of n=500 gives: margin of error ≈ 1/√500 ≈ 4.5%. So the sample proportion should be within ~4.5% of 60% about 95% of the time. A convenience sample of Twitter users would be far less reliable, regardless of sample size.`,
    "w3-visual": `Dataset: household incomes in a city. A histogram with equal $10K bins shows most data below $100K but a long tail to $500K+. Using density: the $450-500K bin might have 0.5% of data, so its height = 0.005/10 = 0.0005 — barely visible. Without density, unequal bins would distort the visual.`,
    "w2-experiments": `Testing a new teaching method: 200 students randomly assigned — 100 use new method (treatment), 100 use standard (control). Both groups take the same final exam. If treatment average = 78 and control = 72, with p < 0.05, we have evidence the method caused improvement. Randomization balances confounders like prior ability.`,
  };
  if (examples[conceptId]) return examples[conceptId];
  return `Consider this in context: ${c.summary} For example, when working with real data in Python, you would apply this concept using Pandas or NumPy to verify and validate your findings.`;
}

function getStudyTip(q, c) {
  const tips = {
    "w1-foundations": "Build a mental map: Exploration → Prediction → Inference. Every statistical task falls into one (or more) of these three pillars.",
    "w1-data-basics": "When you see a dataset, first ask: what is each row? What is each column? Classify every variable before doing anything else.",
    "w2-sampling": "Always check HOW the data was collected before trusting ANY conclusion. A huge biased sample is worse than a small random one.",
    "w2-bias": "For every study you read, ask: who is NOT in this sample? Who might have been left out, and how would that affect the results?",
    "w2-experiments": "Random assignment ≠ random sampling. Random assignment helps establish causation; random sampling helps generalization. They solve different problems.",
    "w3-center-spread": "Always report BOTH mean and median. If they differ significantly, your data is skewed and you need to explain why.",
    "w3-visual": "For histograms: if bins have unequal widths, you MUST use density on the y-axis. This is one of the most common mistakes in data visualization.",
    "w4-probability": "Probability = (favorable outcomes) / (total outcomes), but only when outcomes are equally likely. Always check this assumption first.",
    "w4-rules": "Disjoint → ADD. Independent → MULTIPLY. These two rules cover 90% of probability problems. Know when each applies.",
    "w4-bayes": "Base rate matters! A rare disease + good test ≠ you probably have it. Always ask: what was the probability BEFORE the test?",
    "w4-rv": "Expected value is a long-run average, not what happens in any single trial. A positive E(X) doesn't mean you can't lose money.",
    "w5-normal": "Z-score measures distance from the mean in standard deviation units. Z > 2 or Z < -2 is unusual (about 5% chance). Z > 3 is very rare (<0.3%).",
    "w5-qq": "Q-Q plot is your best friend for checking normality. Straight line = normal-ish. Curved = not normal. Don't rely on histograms alone.",
    "w5-discrete": "Binomial = fixed n, constant p, independent trials (like coin flips). Poisson = counting events over time/space with a stable rate (like calls per hour).",
    "w5-clt": "CLT: sample means are approximately normal for large n, regardless of the original distribution. But it requires independence and finite variance!",
  };
  if (tips[conceptId]) return tips[conceptId];
  return `Master the vocabulary and the logic flow of ${c.title}. When you encounter similar questions, trace back to the fundamental principle in ${c.week}.`;
}

function practiceSpecific(questionId) {
  const q = questions.find(item => item.id === questionId);
  state.practicePool = [q];
  switchView("practiceView");
  resetPracticeSession(state.practicePool);
}

function weakConceptIds() {
  const ranked = concepts.map(c => {
    const s = state.stats.byConcept[c.id] || { answered: 0, correct: 0 };
    const wrongRate = s.answered ? 1 - s.correct / s.answered : .5;
    return { id: c.id, answered: s.answered, wrongRate };
  }).sort((a, b) => b.wrongRate - a.wrongRate || a.answered - b.answered);
  return ranked.slice(0, 5).map(r => r.id);
}

function renderStats() {
  const byWeek = {};
  concepts.forEach(c => byWeek[c.week] ||= { answered: 0, correct: 0 });
  Object.entries(state.stats.byConcept || {}).forEach(([id, s]) => {
    const c = conceptById(id);
    byWeek[c.week].answered += s.answered;
    byWeek[c.week].correct += s.correct;
  });
  const weekHtml = Object.entries(byWeek).map(([week, s]) => {
    const rate = s.answered ? Math.round((s.correct / s.answered) * 100) : 0;
    return `<div class="stat-card"><h3>${week}</h3><p>${s.answered} answered · ${rate}% accuracy</p><div class="bar"><span style="width:${rate}%"></span></div></div>`;
  }).join("");
  const weakHtml = weakConceptIds().map(id => {
    const c = conceptById(id);
    const s = state.stats.byConcept[id] || { answered: 0, correct: 0 };
    const rate = s.answered ? Math.round((s.correct / s.answered) * 100) : 0;
    return `<div class="stat-card"><h3>${c.title}</h3><p class="zh-note">${c.zhTitle}</p><p>${c.week} · ${s.answered} answered · ${rate}% accuracy</p><button type="button" onclick="practiceConcept('${id}')">Drill This Concept</button></div>`;
  }).join("");
  const answered = state.stats.answered || 0;
  const accuracy = answered ? Math.round((state.stats.correct / answered) * 100) : 0;
  const readiness = answered ? Math.min(100, Math.round(accuracy * .55 + Math.min(answered, 120) / 120 * 35 + Math.max(0, 10 - Object.keys(state.stats.wrong || {}).length) / 10 * 10)) : 0;
  const levelCounts = Array.from({ length: 10 }, (_, i) => questions.filter(q => q.difficulty === i + 1).length);
  document.querySelector("#statsPanel").innerHTML = `
    <div class="dashboard-hero">
      <div>
        <p class="eyebrow">Readiness Score</p>
        <strong>${readiness}</strong>
        <span>/100</span>
        <p class="zh-note">综合正确率、练习量和错题数量估算。</p>
      </div>
      <div class="hero-metrics">
        <span>${state.stats.answered}<small>Answered</small></span>
        <span>${accuracy}%<small>Accuracy</small></span>
        <span>${Object.keys(state.stats.wrong || {}).length}<small>Mistakes</small></span>
        <span>${questions.length}<small>Question Bank</small></span>
      </div>
    </div>
    <div class="stat-card">
      <h3>Difficulty Coverage</h3>
      <div class="difficulty-bars">
        ${levelCounts.map((count, i) => `<div><span>L${i + 1}</span><b style="height:${Math.max(8, count * 5)}px"></b><small>${count}</small></div>`).join("")}
      </div>
    </div>
    <h3>Chapter Performance</h3>
    <div class="stat-grid">${weekHtml}</div>
    <h3>Priority Review</h3>
    <div class="stat-grid">${weakHtml}</div>
  `;
}

function startExam() {
  const selected = document.querySelector("#weekSelect").value;
  const examSource = selected === "all" ? questions : questions.filter(q => conceptById(q.conceptId).week === selected);
  const easy = examSource.filter(q => q.difficulty <= 3).sort(() => Math.random() - .5);
  const medium = examSource.filter(q => q.difficulty >= 4 && q.difficulty <= 6).sort(() => Math.random() - .5);
  const hard = examSource.filter(q => q.difficulty >= 7).sort(() => Math.random() - .5);
  const blended = [...easy.slice(0, 30), ...medium.slice(0, 45), ...hard.slice(0, 25)];
  const shuffled = (blended.length ? blended : examSource).sort(() => Math.random() - .5);
  const pool = Array.from({ length: 100 }, (_, i) => shuffled[i % shuffled.length]);
  state.exam = { pool, index: 0, answers: {}, secondsLeft: 3600, timer: null, paused: false };
  document.querySelector("#examStart").classList.add("hidden");
  document.querySelector("#examResult").classList.add("hidden");
  document.querySelector("#examPanel").classList.remove("hidden");
  document.querySelector("#examPaused").classList.add("hidden");
  document.querySelector("#examReview").classList.add("hidden");
  document.querySelector("#pauseExamBtn").textContent = "Pause";
  renderExamQuestion();
  startExamTimer();
}

function startExamTimer() {
  if (!state.exam) return;
  clearInterval(state.exam.timer);
  state.exam.timer = setInterval(() => {
    if (!state.exam || state.exam.paused) return;
    state.exam.secondsLeft -= 1;
    renderTimer();
    if (state.exam.secondsLeft <= 0) submitExam(true);
  }, 1000);
}

function togglePauseExam(forceResume = false) {
  if (!state.exam) return;
  state.exam.paused = forceResume ? false : !state.exam.paused;
  document.querySelector("#examPaused").classList.toggle("hidden", !state.exam.paused);
  document.querySelector("#pauseExamBtn").textContent = state.exam.paused ? "Resume" : "Pause";
  if (state.exam.paused) clearInterval(state.exam.timer);
  else startExamTimer();
}

function renderTimer() {
  const sec = Math.max(0, state.exam?.secondsLeft ?? 3600);
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  document.querySelector("#timer").textContent = `${m}:${s}`;
  const elapsedRatio = state.exam ? (3600 - sec) / 3600 : 0;
  document.querySelector("#timeNeedle").style.left = `${Math.min(100, Math.max(0, elapsedRatio * 100))}%`;
}

function renderExamQuestion() {
  const { pool, index, answers } = state.exam;
  const answered = Object.keys(answers).length;
  document.querySelector("#examProgressText").textContent = `Question ${index + 1} / ${pool.length}`;
  document.querySelector("#examAnsweredText").textContent = `Answered ${answered} · Unanswered ${pool.length - answered}`;
  document.querySelector("#examProgress").value = index + 1;
  renderQuestion(pool[index], "examQuestion", "exam");
  const saved = answers[index];
  if (saved !== undefined) {
    document.querySelectorAll("#examQuestion .option").forEach((btn, i) => {
      if (i === saved) btn.classList.add("selected");
    });
  }
}

function goExam(delta) {
  if (!state.exam || state.exam.paused) return;
  const newIndex = state.exam.index + delta;
  if (newIndex < 0 || newIndex >= state.exam.pool.length) return;
  state.exam.index = newIndex;
  renderExamQuestion();
}

function selectExamAnswer(choice) {
  if (state.exam.paused) return;
  state.exam.answers[state.exam.index] = choice;
  document.querySelectorAll("#examQuestion .option").forEach((btn, i) => {
    btn.classList.toggle("selected", i === choice);
  });
  const answered = Object.keys(state.exam.answers).length;
  document.querySelector("#examAnsweredText").textContent = `Answered ${answered} · Unanswered ${state.exam.pool.length - answered}`;
}

function renderExamReview() {
  if (!state.exam) return;
  const review = document.querySelector("#examReview");
  const { pool, answers } = state.exam;
  review.classList.toggle("hidden");
  review.innerHTML = `
    <div class="review-head">
      <h3>Review Before Submit</h3>
      <p class="zh-note">点击题号可跳转检查。蓝色为已答，浅色为未答。</p>
    </div>
    <div class="review-grid">
      ${pool.map((q, i) => `
        <button type="button" class="${answers[i] !== undefined ? "answered" : "unanswered"}" data-index="${i}">
          ${i + 1}
        </button>
      `).join("")}
    </div>
  `;
  review.querySelectorAll("button[data-index]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.exam.index = Number(btn.dataset.index);
      renderExamQuestion();
      review.classList.add("hidden");
    });
  });
}

function requestSubmitExam() {
  if (!state.exam) return;
  const answered = Object.keys(state.exam.answers).length;
  const unanswered = state.exam.pool.length - answered;
  document.querySelector("#confirmText").textContent = `You answered ${answered} questions and left ${unanswered} unanswered. Submit now?`;
  document.querySelector("#confirmModal").classList.remove("hidden");
}

function closeSubmitConfirm() {
  document.querySelector("#confirmModal").classList.add("hidden");
}

function submitExam(autoSubmit = false) {
  if (!state.exam) return;
  if (!autoSubmit) closeSubmitConfirm();
  clearInterval(state.exam.timer);
  const { pool, answers, secondsLeft } = state.exam;
  let correct = 0;
  const wrongRows = [];
  pool.forEach((q, i) => {
    const isCorrect = answers[i] === q.answer;
    if (isCorrect) correct += 1;
    recordAnswer(q, isCorrect, answers[i] ?? -1);
    if (!isCorrect) wrongRows.push(q);
  });
  refreshStats();
  const used = 3600 - secondsLeft;
  const usedText = `${Math.floor(used / 60)}m ${used % 60}s`;
  document.querySelector("#examPanel").classList.add("hidden");
  document.querySelector("#examResult").classList.remove("hidden");
  document.querySelector("#examResult").innerHTML = `
    <h3>Score: ${correct} / ${pool.length}</h3>
    <p>Accuracy ${Math.round(correct / pool.length * 100)}% · Time used ${usedText} · ${Math.floor(secondsLeft / 60)} minutes left.</p>
    <p class="zh-note">交卷后才统计对错；未答题按错误处理并进入错题本。</p>
    <div class="button-row" style="margin-top:14px">
      <button type="button" onclick="switchView('wrongView')">Review Mistakes</button>
      <button class="ghost" type="button" onclick="startExam()">Retake Exam</button>
    </div>
  `;
  state.exam = null;
  renderTimer();
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));
  document.querySelector("#weekSelect").addEventListener("change", () => {
    state.practicePool = null;
    resetPracticeSession(questionsForSelection());
  });
  document.querySelector("#difficultySelect").addEventListener("change", () => {
    state.practicePool = null;
    resetPracticeSession(questionsForSelection());
  });
  document.querySelector("#typeSelect").addEventListener("change", () => {
    state.practicePool = null;
    resetPracticeSession(questionsForSelection());
  });
  document.querySelector("#conceptSelect").addEventListener("change", () => {
    state.practicePool = null;
    resetPracticeSession(questionsForSelection());
  });
  document.querySelector("#newQuestionBtn").addEventListener("click", () => resetPracticeSession(questionsForSelection(), Math.floor(Math.random() * Math.max(1, questionsForSelection().length))));
  document.querySelector("#prevPracticeBtn").addEventListener("click", () => goPractice(-1));
  document.querySelector("#nextPracticeBtn").addEventListener("click", () => goPractice(1));
  document.querySelector("#reviewConceptBtn").addEventListener("click", () => state.currentQuestion && openConcept(state.currentQuestion.conceptId));
  document.querySelector("#conceptSearch").addEventListener("input", renderConcepts);
  document.querySelector("#clearWrongBtn").addEventListener("click", () => {
    state.stats.wrong = {};
    saveStats();
    refreshStats();
    renderWrongList();
  });
  document.querySelector("#practiceWrongBtn").addEventListener("click", () => {
    const pool = Object.values(state.stats.wrong || {}).map(w => questions.find(q => q.id === w.questionId)).filter(Boolean);
    if (pool.length) {
      state.practicePool = pool;
      switchView("practiceView");
      resetPracticeSession(pool);
    }
  });
  document.querySelector("#startWeakBtn").addEventListener("click", () => {
    const ids = weakConceptIds();
    state.practicePool = questions.filter(q => ids.includes(q.conceptId));
    switchView("practiceView");
    resetPracticeSession(state.practicePool);
  });
  document.querySelector("#expandMapBtn").addEventListener("click", () => {
    document.querySelectorAll("#mindmap details").forEach(item => item.open = true);
  });
  document.querySelector("#collapseMapBtn").addEventListener("click", () => {
    document.querySelectorAll("#mindmap details").forEach(item => item.open = false);
  });
  document.querySelector("#startExamBtn").addEventListener("click", startExam);
  document.querySelector("#prevExamBtn").addEventListener("click", () => {
    if (state.exam && state.exam.index > 0) {
      state.exam.index -= 1;
      renderExamQuestion();
    }
  });
  document.querySelector("#nextExamBtn").addEventListener("click", () => {
    if (state.exam && state.exam.index < state.exam.pool.length - 1) {
      state.exam.index += 1;
      renderExamQuestion();
    }
  });
  document.querySelector("#pauseExamBtn").addEventListener("click", () => togglePauseExam());
  document.querySelector("#resumeExamBtn").addEventListener("click", () => togglePauseExam(true));
  document.querySelector("#reviewExamBtn").addEventListener("click", renderExamReview);
  document.querySelector("#submitExamBtn").addEventListener("click", requestSubmitExam);
  document.querySelector("#confirmSubmitBtn").addEventListener("click", () => submitExam(false));
  document.querySelector("#cancelSubmitBtn").addEventListener("click", closeSubmitConfirm);
  document.querySelector("#resetStatsBtn").addEventListener("click", () => {
    state.stats = { answered: 0, correct: 0, byConcept: {}, wrong: {}, history: [] };
    saveStats();
    refreshStats();
    renderStats();
    renderWrongList();
  });
}

renderWeekSelect();
renderFilterSelects();
renderMindmap();
renderConcepts();
resetPracticeSession(questionsForSelection());
refreshStats();
renderStats();
bindEvents();
