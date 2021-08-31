// Problem: A1: Consistency - Chapter 1
// Contest: Facebook Coding Competitions - Facebook Hacker Cup 2021 Qualification Round
// URL: https://www.facebook.com/codingcompetitions/hacker-cup/2021/qualification-round/problems/A1
// Memory Limit: 1024 MB
// Time Limit: 360000 ms
// 
// Powered by CP Editor (https://cpeditor.org)

#include<bits/stdc++.h>
using namespace std;

bool isVowel(char i){
		if(i=='A' || i=='E' || i=='O' || i=='I' || i=='U'){
				return true;
		}
		return false;
}

void solve(int x){
		int vowel  = 0;
		int cons  = 0;
		string s;
		cin>>s;
		map<char, int>mp;
		int n=s.length();
		set<char>strn;
		int ans = INT_MAX;
		for(char i = 'A';i<='Z';i++){
			int cnt =  0;
			if(isVowel(i)){
				for(int j=0;j<n;j++){
					if((char(s[j])!=i)){
					if(!isVowel(char(s[j]))){
						cnt++;
						// cout<<s[j]<<i<<"\n";
					}
					else{
						cnt+=2;
					}
					}
				}
			}
			else{
				for(int j = 0;j<n;j++){
					if((char(s[j])!=i)){
					if(!isVowel(char(s[j])) && char(s[j])!=i){
						cnt+=2;
					}
					else{
						cnt++;
					}
					}
				}
			}
			ans =  min(ans, cnt);
		}
		cout<<ans<<'\n';
		
}

int main(){
	int t;
	cin>>t;
	for(int i=1;i<=t;i++){
		solve(i);
	}
	return 0;
}