// Problem: A2: Consistency - Chapter 2
// Contest: Facebook Coding Competitions - Facebook Hacker Cup 2021 Qualification Round
// URL: https://www.facebook.com/codingcompetitions/hacker-cup/2021/qualification-round/problems/A2
// Memory Limit: 1024 MB
// Time Limit: 360000 ms
// 
// Powered by CP Editor (https://cpeditor.org)

#pragma GCC optimize("Ofast")
#pragma GCC target("avx,avx2,fma")
#include <bits/stdc++.h>
using namespace std;
//---------------------------------//
void __print(int x) {cerr << x;}
void __print(long x) {cerr << x;}
void __print(long long x) {cerr << x;}
void __print(unsigned x) {cerr << x;}
void __print(unsigned long x) {cerr << x;}
void __print(unsigned long long x) {cerr << x;}
void __print(float x) {cerr << x;}
void __print(double x) {cerr << x;}
void __print(long double x) {cerr << x;}
void __print(char x) {cerr << '\'' << x << '\'';}
void __print(const char *x) {cerr << '\"' << x << '\"';}
void __print(const string &x) {cerr << '\"' << x << '\"';}
void __print(bool x) {cerr << (x ? "true" : "false");}

template<typename T, typename V>
void __print(const pair<T, V> &x) {cerr << '{'; __print(x.first); cerr << ','; __print(x.second); cerr << '}';}
template<typename T>
void __print(const T &x) {int f = 0; cerr << '{'; for (auto &i: x) cerr << (f++ ? "," : ""), __print(i); cerr << "}";}
void _print() {cerr << "]\n";}
template <typename T, typename... V>
void _print(T t, V... v) {__print(t); if (sizeof...(v)) cerr << ", "; _print(v...);}
#ifndef ONLINE_JUDGE
#define deb(x...) cerr << "[" << #x << "] = ["; _print(x)
#else
#define deb(x...)
#endif
//------------------------------//

typedef long long int ll;
typedef pair<int,int> pi;
typedef pair<ll,ll> pll;
typedef vector<int> vi;
typedef vector<ll> vll;
typedef vector<pi> vpi;
typedef vector<pll> vpll;

#define  ff           first
#define  ss           second
#define  pb           push_back
#define  IOS          ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
#define  all(x)       (x).begin(), (x).end()
#define  ps(x,y)      fixed<<setprecision(y)<<x
#define  rep(i,a,b)   for(ll i=a ; i<b ; ++i)

const ll MOD = 1e9 + 7;
const ll INF = 1e18;
const ll maxn = 1e6 + 4;


void solve(int x){
  string s;
  cin >> s;
  int n = s.size();
  vector<vll> Floyd_Warshal('Z'+1,vll('Z'+1));
  for(char x='A';x<='Z';x++){
    for(char y='A';y<='Z';y++){
      if(x == y)Floyd_Warshal[x][y] = 0;
      else Floyd_Warshal[x][y] = MOD;
    }
  }
  int k;
  cin >> k;
  for(int i=0;i<k;i++){
    char x,y;
    cin >> x >> y;
    Floyd_Warshal[x][y] = 1;
  }  
  for(char x='A';x<='Z';x++){
    for(char y='A';y<='Z';y++){
      for(char z='A';z<='Z';z++){
        if(Floyd_Warshal[y][z] > Floyd_Warshal[y][x] + Floyd_Warshal[x][z]){
          Floyd_Warshal[y][z] = Floyd_Warshal[y][x] + Floyd_Warshal[x][z];
        }
      }
    }
  }
  bool fine = false;
  ll ans = MOD;
  for(char x='A';x<='Z';x++){
    ll cnt = 0;
    bool valid = true;
    for(int i=0;i<n;i++){
      if(s[i] == x)continue;
      if(Floyd_Warshal[s[i]][x] >= MOD){
        valid = false;
        break;
      }
      cnt += Floyd_Warshal[s[i]][x];
    }
    if(valid){
      fine = true;
      ans = min(ans,cnt);
    }
  }
  cout<<"Case #"<<x<<": ";
  if(fine){
    cout << ans << '\n';
  }
  else cout << "-1\n";
}

int main(){
  IOS
   int t;
   cin >> t;
   rep(i,1,t+1){
   solve(i);
   }
  //cerr <<endl <<"[ Time : " << (float)clock() / CLOCKS_PER_SEC << " secs ]" << endl;
}

// integer overflow
// var vs loop var