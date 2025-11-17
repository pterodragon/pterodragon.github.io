# Game Theory

## 3 Preliminaries

### 3.1 Normal-Form Games with Pure Strategies

#### Pure Strategy (Definition 3.2)
A **pure strategy** for player $i$ is a deterministic plan of action. The set of all **pure strategies** for player $i$ is denoted $S_i$. A **profile of pure strategies** $s=(s_1, s_2, \dots, s_n),s_i\in S_i \, \forall i = 1,2,\dots,n$ describes a particular combination of pure strategies chosen by all $n$ players in the game.

## 4 Rationality and Common Knowledge

### 4.1 Dominance in Pure Strategies

#### Strictly Dominated Strategy (Definition 4.1) 
Let $s_i \in S_i$ and $s_i'\in S_i$ be possible strategies for player $i$. We say $s_i'$ is **strictly dominated** by $s_i$ if for any combination of the other players' strategies, $s_{-i} \in S_{-i}$, players $i$'s payoff from $s_i'$ is strictly less than that from $s_i$:
$$
v_i(s_i, s_{-i}) > v_i'(s_i', s_{-i}) \quad \forall s_{-i} \in S_{-i}
$$
We write $s_i \succ_i s_i'$ to denote this.

#### Strictly Dominant Strategy (Definition 4.2)
$s_i\in S_i$ is a **strictly dominant strategy** for $i$ if every other strategy of $i$ is strictly dominated by it:
$$
v_i(s_i, s_{-i}) > v_i'(s_i', s_{-i}) \quad \forall s_i' \in S_{i} \setminus s_i \quad \forall s_{-i} \in S_{-i}
$$

## 5 Nash Equilibrium 

### 5.1 Nash Equilibrium in Pure Strategies

#### Nash Equilibrium (Definition 5.1)
The pure-strategy profile $s^* = (s_1^*, s_2^*, \dots, s_n^* ) \in S$ is a **Nash equilibrium** if $s_i^*$ is a best response to $s_{-i}^* \, \forall i \in N$:
$$
v_i(s_i^*, s_{-i}^*) \ge v_i'(s_i', s_{-i}^*) \quad \forall s_i' \in S_{i} \quad \forall i \in N
$$

## 6 Mixed Strategies

### 6.1 Strategies, Beliefs, and Expected Payoffs

#### Simplex, mixed strategy (Definition 6.1)
Let $S_i = {s_{i1}, s_{i2}, \dots, s_{im}}$ be player $i$'s finite set of pure strategies. Define $\Delta S_i$ as the **simplex** of $S_i$, which is the set of all probability distributions over $S_i$. A **mixed strategy** for player $i$ is an element $\sigma_i\in \Delta S_i$, s.t. $\sigma_i = \{\sigma_i({s_{i1}}), \sigma_i({s_{i2}}), \dots, \sigma_i({s_{im}})\}$ is a probability distribution over $S_i$, where $\sigma_i(s_i)$ is the probability that player $i$ plays $s_i$.

#### in the support of (Definition 6.2)
Given a mixed strategy $\sigma_i(\cdot)$ for player $i$, we say a pure strategy $s_i \in S_i$ is **in the support of** $\sigma_i(\cdot)$ if and only if it occurs with positive probability, i.e. $\sigma_i (s_i)>0$.

### 6.2 Mixed Strategy Nash Equilibrium

#### Nash Equilibrium (for mixed strategy) (Definition 6.6)
The mixed strategy profile $\sigma_i^* = (\sigma_1^*, \sigma_2^*, \dots, \sigma_n^*)$ is a *Nash equilibrium* if for each player $\sigma_i^*$ is a best response to $\sigma_{-i}^*$:
$$
v_i(\sigma_i^*,\sigma_{-i}^*)\ge v_i(\sigma_i, \sigma_{-i}^*) \quad \forall \sigma_i \in \Delta S_i \quad \forall i \in N
$$

#### Proposition 6.1 
If $\sigma^*$ is a Nash equilibrium, and both $s_i$ and $s_i'$ are in the support of $\sigma_i^*$, then
$$
v_i(s_i, \sigma_{-i}^*) = v_i(s_i', \sigma_{-i}^*) = v_i(\sigma_i^*, \sigma_{-i}^*)
$$
Meaning: If a player is randomizing between two alternatives then he must be indifferent between them.

## 7 Preliminaries (Dynamic games of incomplete information)

### 7.1 The Extensive-Form Game
In addition to the set of players and payoffs for each player as a function of outcomes, an extensive game also has the components of order of moves, action of players when they can move, the knowledge that players have when they can move, probability distributions over exogenous events, and all of these are common knowledge among all the players.

Players are allowed to condition their actions on paths taken on the game tree.

### 7.1.1 Game Trees

### Game tree (Definition 7.1)
A *game tree* is a set of node $x \in X$ with a precedence relation $x > x'$ meaning $x$ precedes $x'$. Every node in a game tree has only one predecessor. The *root* of the tree precedes all other nodes. Terminal nodes set are denoted as $Z \subset X$. Every node that is not a terminal node is assigned to a player $i(x)$, with the action $A_i(x)$ or to Nature.

### Information sets (Definition 7.2)
Every player $i$ has a collection of information sets $h_i \in H_i$ that partition the nodes of the game at which player $i$ moves with the following properties:

1. If $h_i$ is a singleton that includes only $x$ then player $i$ who moves at $x$ knows that he is at $x$
2. If $x \ne x'$ and if both $x \in h_i$ and $x' \in h_i$ then player $i$ who moves at $x$ does not know whether he is at $x$ or $x'$
3. If $x \ne x'$ and if both $x \in h_i$ and $x' \in h_i$ then $A_i(x') = A_i(x)$.

Meaning of 3.: Same action is applied to set of nodes in a game stage indistinguishable from each other

### 7.1.2 Imperfect versus Perfect Information

### Perfect Information (Definition 7.3)
A game of complete information in which every information set is a singleton and there are no moves of Nature is called a **game of perfect information**. Otherwise it is a **game of imperfect information**.

Uncertainty over the choice of Nature is called **exogenous uncertainty** and uncertainty over the choice of another player is called **endogenous uncertainty**.

### 7.2 Strategies and Nash Equilibrium

### 7.2.1 Pure Strategies

### Pure Strategies in Extensive-Form Games
A **pure strategy** for player $i$ is a *complete plan of play* that describes which pure action player $i$ will choose at each of his information sets.

### Pure Strategy (Definition 7.4)
A **pure strategy** for player $i$ is a mapping $s_i: H_i \rightarrow A_i$ that assigns an action $s_i(h_i) \in A_i(h_i)$ for every information set $h_i \in H_i$. We denote by $S_i$ the set of all pure-strategy mappings $s_i \in S_i$.

### 7.2.2 Mixed versus Behaviorial Strategies

### Mixed Strategies (Definition 7.5)
A **mixed strategy** for player $i$ is a probability distribution over his pure strategies $s_i \in S_i$.

The player selects a plan randomly *before the game is played* and then follows *a particular pure strategy*. (If-then cases strategies are not allowed)

### Behaviorial Strategies
A **behaviorial strategy** specifies for each information set $h_i \in H_i$ an independent probability distribution over $A_i(h_i)$ and is denoted by $\sigma_i : H_i \rightarrow \Delta A_i(h_i)$ where $\sigma_i(a_i(h_i))$ is the probability that player $i$ plays action $a_i(h_i) \in A_i(h_i)$ in information set $h_i$.

### 7.2.3 Normal-Form Representation of Extensive-Form Games
Any extensive-form game can be transformed into a normal-form game by using the set of pure strategies of the extensive form (Definition 7.4) as the set of pure strategies in the normal form.

### 7.3 Nash Equilibrium and Paths of Play 

### Equilibrium path (Definition 7.8)
Let $\sigma^* = (\sigma_1^*, \dots, \sigma_n^*)$ be a Nash Equilibrium profile of behaviorial strategies in an extensive-form game. We say an information set is **on the equilibrium path** if given $\sigma^*$ it is reached with positive probability. We say that an information set is **off the equilibrium path** if given $\sigma^*$ it is never reached.

In a Nash equilibrium players choose to proceed *on the equilibrium path* because of their beliefs about what the other players are doing *on and off the equilibrium path*. Example: Given the belief that the opponent is "threatening" to do a particular sequence of action (in all situations) no matter what and deviating from the corresponding optimal actions (off the equilibrium path) is worse off. However this belief might not be true and things might not unfold this way were the player to deviate so there needs to be a more refined type of equilibrium - the subgame-perfect equilibrium.

## 8 Credibility and Sequential Rationality

### 8.1 Sequential Rationality and Backward Induction

### Sequential rationality (Definition 8.1)
Given strategies $\sigma_{-i} \in \Delta S_{-i}$ of $i$'s opponent, we say $\sigma_i$ is **sequentially rational** if and only if $i$ is playing a best response to $\sigma_{-i}$ in each of his information sets.

### 8.2 Subgame-Perfect Nash Equilibrium: Concept

### Subgame (Definition 8.2)
A proper subgame $G$ of an extensive-form game $\Gamma$ consists of only a single node and all its successors in $\Gamma$ with the property that if $x \in G$ and $x' \in h(x)$ then $x' \in G$. The subgame $G$ is itself a *game tree* with its information sets and payoffs inherited from $\Gamma$.

### Subgame-perfect Nash equilibrium (Definition 8.3)
Let $\Gamma$ be an $n$-player extensive-form game. A behaviorial strategy profile $\sigma^* = (\sigma_1^*, \dots, \sigma_n^*)$ is a **subgame-perfect (Nash) equilibrium** if for every proper subgame $G$ of $\Gamma$ the restriction of $\sigma^*$ to $G$ is a Nash equilibrium in $G$.

Subgame perfection requires not only that a Nash equilibrium profile of strategies be a combination of best responses on the equilibrium path (necessary condition of Nash equilibrium), but also that the profile of strategies consist of mutual best responses **off the equilibrium path**. That is the restriction meaning $\sigma^*$ is a Nash equilibrium for every proper subgame including those not reached in equilibrium.

Not all Nash equilibria are necessarily subgame-perfect equilibria.

Fact: For any finite game of *perfect* information, the set of subgame-perfect Nash equilibria conincides with the set of Nash equilibria that survive backward induction.

## 9 Multistage Games

### 9.2 Payoffs
In a multistage game in which there are $T$ stage-games played in each of the periods $1,2,\dots,T$. Let $v_i^t$ be player $i$'s payoff from the anticipated outcome in the stage-game played in period $t$. We denote by $v_i$ the *total payoff* of player $i$ from playing the sequence of games in the multistage game and define it as:
$$
v_i = v_i^1+\delta v_i^2+\delta^2 v_i^3+\dots+\delta^{T-1} v_i^T = \sum_{t=1}^T \delta^{t-1}v_i^t
$$

$\delta \in [0, 1]$ is the discount factor.

### 9.4 Subgame-Perfect equilibria
Summary:
In a multistage game, 
1. treating each stage of the game as an independent game and looking at a sequence of play that is a Nash equilibrium yields a subgame-perfect equilibrium (Proposition 9.1)
2. if $\sigma^*$ is a Nash equilibrium of the multistage game, then $\sigma^*$ must have specified the Nash equilibrium of the last stage game. (Proposition 9.2)
3. if the finite multistage game consists of stage-games that each have a unique Nash equilibrium then the multistage game has a unique subgame-perfect equilibrium. (Proposition 9.3)
4. If the stage-game played at the end has more than one Nash equilibrium, then it might be possible to have a subgame-perfect equilibrium that supports behaviors that deviate from the Nash equilibrium of the standalone version of the stage-game. In this case there must be two distinct Nash equilibria in some stage that has a "carrot" and "stick" and the discount factor has to be large enough.

### 9.5 The One-Stage Deviation Principle
To check if a proposed strategy was a subgame-perfect equilibrium, think of the problem as a single-player decision problem that the player $i$ needs to play a best response to $\sigma_{-i}$ in every subgame. So we need to check if he is playing an optimal action in each of his information sets, *taking the actions of all other players $\sigma_{-i}$ as given*. Once $\sigma_{-i}$ of other players in the extensive-form are fixed, player $i$ solves a standard dynamic programming (backward induction) problem.

In the single-player problem, treat $h_i$ as a node in the decision tree induced by $\sigma_{-i}$, we can define $v_i(\sigma_i, h_i)$ to be the expected payoff of player $i$ from the information set $h_i$ onward by playing $\sigma_i$ (with $\sigma_{-i}$ being fixed). A strategy $\sigma_i$ is *optimal* if there is no strategy $\sigma_i'$ and information set $h_i$ s.t. $v_i(\sigma_i', h_i) > v_i(\sigma_i, h_i)$.

Given a strategy $\sigma_i$, define the strategy $\sigma_i^{a,h_i}$ as the strategy that is identical to $\sigma_i$ everywhere except at $h_i$, and at $h_i$ we substitute the prescribed (possibly random) action of $\sigma_i$ with the action $a \in A_i(h_i)$.

### One-stage unimprovable (Definition 9.1)
A strategy $\sigma_i$ is **one-stage unimprovable** if there is no information set $h_i$, action $a \in A_i(h_i)$, and corresponding strategy $\sigma_i^{a, h_i}$ s.t. $v_i(\sigma_i^{a, h_i}, h_i) > v_i(\sigma_i, h_i)$

Clearly an optimal strategy is one-stage unimprovable. The converse is stated next.

### Theorem 9.1
A one-stage unimprovable strategy must be optimal.

## 10 Repeated Games

### 10.1 Finitely Repeated Games

### Finitely Repeated Games (Definition 10.1)
Given a stage-game $G$, $G(T,\delta)$ denotes the **finitely repeated game** in which the stage-game $G$ is played $T$ consecutive times, and $\delta$ is the common discount factor.

### Proposition 10.1 
By proposition 9.3, if the stage-game of a finitely repeated game has a *unique Nash equilibrium*, then the finitely repeated game has a **unique** subgame-perfect equilibrium.

### 10.2 Infinitely Repeated Games

### 10.2.1 Payoffs

### Present Value (Definition 10.2)
Given the discount factor $0 < \delta < 1$, the **present value** of an *infinite sequence of payoffs* $\{v_i^t\}_{t=1}^{\infty}$ for player $i$ is:
$$
v_i = v_i^1 + \delta v_i^2 + \delta^2 v_i^3 + \cdots + \delta^{t-1}v_i^t + \cdots = \sum_{t=1}^{\infty}\delta^{t-1}v_i^t
$$

### Average Payoff (Definition 10.3)
Given $\delta < 1$, the **average payoff** of an *infinite sequence* of payoffs $\{v_i^t\}_{t=1}^{\infty}$ is:
$$
\bar{v}_i=(1-\delta)\sum_{t=1}^{\infty}\delta^{t-1}v_i^t
$$

### 10.2.2 Strategies

### Definition 10.4 
Consider an infinitely repeated game. Let $H_t$ denote the set of all possible **histories** of length $t$, $h_t \in H_t$, and Let $H = \bigcup_{t-1}^{\infty}H_t$ be the set of all possible histories. A **pure strategy** for player $i$ is a mapping $s_i : H \rightarrow S_i$ that maps histories into actions of the stage-game. Similarly a **behaviorial strategy** of player $i$, $\sigma_i : H \rightarrow \Delta S_i$ maps histories into stochastic choices of actions in each stage.

### 10.3 Subgame-Perfect Equilibria

### Definition 10.5 
A profile of strategy (pure/behaviorial) (defined for all $i \in N$) is subgame-equilibrium if for any history, the continuation of play dictated by the profile is a Nash equilibrium.

### Proposition 10.2 
The history-independent Nash strategy, playing the (static) Nash equilibrium every time regardless of history, is a subgame-perfect equilibrium in the repeated game (for $\delta < 1$).

#### Note 
There might strategies other than the history-independent Nash strategy that are subgame-perfect equilibrium (that depends on the history) like **trim-trigger strategies**.

### Proposition 10.3 
In an infinitely repeated game, a profile of strategies is a subgame-perfect equilibrium if and only if there is no player and no single history for which the player would gain from deviating. (follows theorem 9.1)

### 10.6 The Folk Theorem 

### Convex hull (Definition 10.7)
Given a set of vectors $V = {v^1, v^2, \dots, v^n}$ in $\real^n$, the **convex hull** of $V$ is:
$$
CoHull(v) = \bigg\{v\in \real^n: \exists (\alpha_1, \dots, \alpha_k) \in \real_{+}^k, \sum_{j=1}^k \alpha_j = 1, v=\sum_{j=1}^k \alpha_j v^j\bigg\}
$$

### Feasible payoffs 
The convex hull of a game's payoffs is called the **feasible payoffs**

### The Folk Theorem (Theorem 10.1)
Let $G$ be a finite, simultaneous-move game of complete information, let $(v_1^*, \dots, v_n^*)$ denote the payoffs from a Nash equilibrium of $G$, and let $(v_1, \dots, v_n)$ be a feasible payoff of $G$. If $v_i > v_i^*, \forall i \in N$, and if $\delta$ is sufficiently close to $1$, then there exists a subgame-perfect equilibrium of the infinitely repeated game $G(\delta)$ that achieves an average payoff arbitrarily close to $(v_1, \dots, v_n)$.

## 11 Strategic Bargaining

### 11.2 Finitely Many Rounds of Bargaining

The bargaining game of $T < \infty$ periods has the same stages of one of the player proposing a split of the "pie" and other players accepting or rejecting the offer. If the offer is not accepted by the majority then the next stage-game is played with some other player proposing a different split of the one-stage discounted pie.

### Proposition 11.3 
In a bargaining game, any subgame-perfect equilibrium must have the players reach an agreement in the first round 

## 12 Bayesian Games 

### 12.1 Strategic Representation of Bayesian Games 

### 12.1.1 Players, Actions, Information, and Preferences

### Static Bayesian game of incomplete information (Definition 12.1)
The normal-form representation of an $n$-player **static Bayesian game of incomplete information** is 
$$
\lang N, \{A_i\}_{i=1}^n, \{\Theta_i\}_{i=1}^n, \{v_i(\cdot;\theta_i),\theta_i \in \Theta\}_{i=1}^n, \{\phi_i\}_{i=1}^n \rang
$$
$N = \{1, 2, \dots, n\}$ is the set of players;

$A_i$ is the *action set* of player $i$;

$\Theta_i = \{\theta_{i1},\theta_{i2},\dots,\theta_{ik_i}\}$ is the *type space* of player $i$;

$v_i: A \times \Theta_i \rightarrow \real$ is the type-dependent payoff function of player $i$, where $A \equiv A_1 \times A_2 \times \dots \times A_n$

$\phi_i$ describes the *belief* of player $i$ with respect to the uncertainty over the other players' types, i.e. $\phi_i(\theta_{-i}|\theta_i)$ is the posterior conditional distribution on $\theta_{-i}$ given that $i$ knows his type is $\theta_i$

### 12.1.3 Strategies and Bayesian Nash Equilibrium 

### Pure strategy / Mixed strategy in a static Bayesian game (Definition 12.3)
A **pure strategy** for player $i$ is a function $s_i: \Theta_i \rightarrow A_i$ that specifies a pure action $s_i(\theta_i)$ that player $i$ will choose when his type is $\theta_i$. A **mixed strategy** is a probability distribution over a player's pure strategies.

### Pure-strategy Bayesian Nash Equilibrium (Definition 12.4)
A strategy profile $s^* = (s_1^*(\cdot), s_2^*(\cdot), \dots, s_n^*(\cdot))$ is a **pure-strategy Bayesian Nash Equilibrium** if, for every player $i$, for each of player $i$'s types $\theta_i \in \Theta_i$, and for every $a_i \in A$, $s_i^*(\cdot)$ solves 
$$
\sum_{\theta_{-i} \in \Theta_{-i}} \phi_i (\theta_{-i} | \theta_i) v_i(\blue{s_i^*(\theta_i)},s_{-i}^*(\theta_{-i});\theta_i) \ge 

\sum_{\theta_{-i} \in \Theta_{-i}} \phi_i (\theta_{-i} | \theta_i) v_i(\blue{a_i},s_{-i}^*(\theta_{-i});\theta_i) 
$$

### 13 Auctions and Competitive Bidding 

### 13.1 Independent Private Values 
In **private values** setting, the willingness to pay depends on the person's own type, and this is private information. 

In **common-values** setting, the preferences of some players may depend on the types of other players

In **independent private values** (IPV) setting, the type of each person is drawn from the same distribution independently from each other.

### Summary

- The second-price sealed-bid auction is related to the English auction (incremental bids) and they are strategically equivalent. There is a weakly dominant strategy which is to bid the true valuation for each player. This holds true in the IPV case, and even when types are correlated (but private).
- In first-price sealed-bid auction (or the related Dutch auction), bidding the true valuation is a dominated strategy (not equilibrium). Players will try to shade their valuation to obtain positive expected value. The exact computation of equilibrium relies on assumptions.
- The **revenue equivalence theorem** states some conditions of auctions that yield the same expected revenue. The English auction and the Dutch auction have the same expected revenue following those conditions.
- If the auction is one of common values then players must take into account the downsides of the **winner's curse** and bid accordingly to avoid overpaying for the object. In such setting, a player wins when his signal is the most optimistic and thus overvaluing and overpaying if he does not take this into account.

## 14 Mechanism Design 

### 14.1 Setup: Mechanism as Bayesian Games 

### 14.1.1 The Players
Each player $i$ privately observes a signal (his type) $\theta_i \in \Theta_i$ which determines his preference. $\theta = (\theta_1, \theta_2, \dots, \theta_n)$ is the **state of the world** given the realization of $\theta_i$, and this is drawn randomly from the state space $\Theta \equiv \Theta_1 \times \Theta_2 \times \cdots \times \Theta_n$, according to some prior distribution $\phi(\cdot)$ over $\Theta$. The set $X$ is defined as the set of **public** alternatives and assume that these have "money-equivalent" values. The payoff to player $i$ is given by 
$$
v_i(x,m_i,\theta_i) = u_i(x,\theta_i) + m_i
$$
This class of preferences is called **quasilinear preferences** as money $m_i \in \real$ is added linearly to some function of other outcomes.

The **outcomes** is represented by $y = (x,m_1,\dots,m_n)$, the choice of the public alternative with monetary amounts that each player gets. 

Assume the case of *private values* in which player $i$'s payoff does not depend directly on other players' private information. 

### 14.1.2 The Mechanism Designer 
Assume that monetary payments have to be self-financed: $\sum_{i=1}^n m_i \le 0$, a negative value means the mechanism designer extracts money from the players.

The set of outcome is 
$$
Y = \{(x,m_1, \dots, m_n): x\in X, m_i \in \, \real \forall i \in N, \sum_{i=1}^I m_i \le 0\}
$$

The mechanism designer's objective is given by a **choice rule**

$$
f(\theta) = (x(\theta), m_1(\theta), \dots, m_n(\theta)) \quad x(\theta) \in X, \sum_{i=1}^I m_i(\theta) \le 0
$$
$x(\theta)$ is the **decision rule**, $(m_1(\theta), \dots, m_n(\theta))$ is the **transfer rule**

### 14.1.3 The Mechanism Game 

### Mechanism (Definition 14.1)
A **mechanism**, $\Gamma = \lang A_1, A_2, \dots, A_n, g(\cdot) \rang$ is a collection of $n$ action sets $A_1, A_2, \dots, A_n$ and an outcome function $g: A_1 \times A_2 \times \cdots \times A_n \rightarrow Y$. A pure strategy for player $i$ in the mechanism $\Gamma$ is a function that maps types into actions, $s_i: \Theta_i \rightarrow A_i$. The payoffs of the players are given by $v_i(g(s), \theta_i)$.

### Bayesian Nash Equilibrium (Definition 14.2)
The strategy profile $s^*(\cdot) = s^*_1(\cdot), \dots, s^*_n(\cdot))$ is a **Bayesian Nash equilibrium** of the mechanism $\Gamma = \lang A_1, A_2, \dots, A_n, g(\cdot) \rang$ if for every $i \in N$ and for every $\theta_i \in \Theta_i$
$$
E_{\theta_{-i}}[v_i(g(\blue{s_i^*(\theta_i)}, s_{-i}^*(\theta_{-i})), \theta_i) | \theta_i] \\
\ge E_{\theta_{-i}}[v_i(g(\blue{a_i'}, s_{-i}^*(\theta_{-i})), \theta_i) | \theta_i] \quad \forall a_i' \in A_i
$$
meaning following that strategy profile and believing other players are also following that, the expected payoff for every player is maximized regardless of his type.

### Mechanism implementation (Definition 14.3) 
A mechanism $\Gamma$ **implements** the choice rule $f(\cdot)$ if there exists a Bayesian Nash equilibrium of the mechanism $\Gamma$, $(s^*_1(\theta_1), \dots, s^*_n(\theta_n))$, s.t. $g(s^*_1(\theta_1), \dots, s^*_n(\theta_n)) = f(\theta)$ for all $\theta \in \Theta$

The idea is that the mechanism designer wants to know $\theta$ and choose the outcome $f(\theta)$. Using the mechanism with the equilibrium strategies, the players choose actions that commensurate with that strategies and through the outcome function $g(\cdot)$ the mechanism does what the mechanism designer wanted to do because $a$ is chosen s.t. $g(a) = f(\theta) \, \forall \theta$

Remark: this is **partial implementation** where there might be undesirable equilibrium outcomes

### 14.2 The Revelation Principle

### Direct Revelation Mechanism (Definition 14.4)
$\Gamma = \lang \Theta_1, \dots, \Theta_n, f(\cdot) \rang$ is a **direct revelation mechanism** for choice rule $f(\cdot)$ if $A_i = \Theta_i \, \forall i \in N$ and $g(\theta) = f(\theta) \, \forall \theta \in \Theta$ 

### Truthfully implementable in Bayesian Nash Equilibrium (Definition 14.5)
The choice rule $f(\cdot)$ is **truthfully implementable in Bayesian Nash equilibrium** if for all $\theta$ the direct revelation mechanism has a Bayesian Nash equilibrium $s_i^*(\theta_i) = \theta_i$ for all $i$, i.e. 
$$
E_{\theta_{-i}}[v_i(f(\blue{\theta_i}, \theta_{-i})), \theta_i) | \theta_i] \\
\ge E_{\theta_{-i}}[v_i(f(\blue{\hat{\theta}_i}, \theta_{-i})), \theta_i) | \theta_i] \quad \forall \hat{\theta}_i \in \Theta_i
$$

meaning players truthfully telling their private values $\theta$ is a Bayesian Nash equilibrium strategy in the direct revelation mechanism. 

### The Revelation Principle for Bayesian Nash Implementation (Proposition 14.1) 
A choice rule $f(\cdot)$ is implementable in Bayesian Nash equilibrium if and only if it is truthfully implementable in Bayesian Nash equilibrium.

This basically says if the mechanism designer cannot implement $f(\cdot)$ then there is no mechanism in the world that can. The reason is that for any mechanism, the players can compute $s_i^*(\theta_i)$ themselves and will not lie as the computed strategy is optimal, and this computation work can actually be done by the mechanism designer in a new mechanism instead. But by construction this new mechanism takes the truthful value of $\theta$ from the players so this is the direct revelation mechanism.

### 14.3 Dominant Strategies and Vickrey-Clarke-Groves Mechanisms

### 14.3.1 Dominant Strategy Implementation 

### Dominant Strategy Equilibrium (Definition 14.6)
The strategy profile $s^*(\cdot) = (s^*_1(\cdot), \dots ,s^*_n(\cdot))$ is a **dominant strategy equilibrium** of the mechanism $\Gamma = \lang A_1, A_2, \dots, A_n, g(\cdot) \rang$ if for every $i \in N$ and for every $\theta_i \in \Theta_i$ 
$$
v_i(g(\blue{s_i^*(\theta)},a_{-i}), \theta) \ge
v_i(g(\blue{a_i'},a_{-i}), \theta) \quad \forall a_i' \in A_i, \forall a_{-i} \in A_{-i}
$$

meaning each player has a strategy that maximizes his expected payoff regardless of what strategies he expects others to play.

### 14.3.2 Vickrey-Clarke-Groves Mechanisms 

### Proposition 14.2 
In the quasilinear environment, given a state of the world $\theta \in \Theta$, an alternative $x^* \in X$ is Pareto optimal if and only if it is a solution to 
$$
\max_{x \in X} \sum_{i=1}^I u_i(x,\theta_i)
$$
This is because money transfer between the players do not matter to Pareto efficiency

### First-best decision rule 
A rule $x^*(\cdot)$ is the **first-best decision rule** if for all $\theta \in \Theta$, $x^*(\theta)$ is Pareto optimal

### Vickrey-Clarke-Groves mechanisms (Definition 14.7)
Given announcement $\hat{\theta}$, the choice rule $f(\hat{\theta}) = (x^*(\hat{\theta}), m_1(\hat{\theta}), \dots, m_n(\hat{\theta}))$ is a **Vickrey-Clarke-Groves (VCG) mechanism** if $x^*(\cdot)$ is the first-best decision rule and if for all $i \in N$ 
$$
m_i(\hat{\theta}) = \sum_{j\ne i} u_j(x^*(\hat{\theta}_i, \hat{\theta}_{-i}), \hat{\theta}_j) + h_i(\hat{\theta}_{-i})
$$

### Proposition 14.3 
Any VCG mechanism is truthfully implementable in dominant strategies.

Note: The stipulated monetary transfer rule internalizes the externality (accounts for the public good). It does not matter if the players are telling the truth $\theta_i$, but the players' part of the transfer is calculated as if they are telling the truth. The consequence is that player $i$ is faced with a choice as if other players are telling the truth. Thus, this is as if the players are choosing the ultimate decision $x$.
