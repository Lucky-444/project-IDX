# Atomic Design Pattern
https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97



# for caching we use react query
https://tanstack.com/query/latest/docs/framework/react/quick-start

# cacheTime vs staleTime
No matter component mounts or unmounts, I don't want an API call for 2 mins after the first time get data
That is what staleTime is doing. staleTime tells you how fresh you data is. It is very similar to Cache-Control: max-age=120.
So if you set staleTime: 120000, in your example, you're guaranteed to not get another network request for two minutes after the first successful one.

cacheTime is the time after which the data will be removed from the cache. So if you set
cacheTime: 120000, you're saying "I want to keep this data in the cache 


cacheTime is something totally different. Think about it as a garbage-collect time. It basically describes how long data should be kept in the cache before it can be garbage collected. This is only relevant for unused queries, because active queries can per definition not be garbage collected.

***read this blog ***
https://antelo.medium.com/react-query-cachetime-vs-staletime-ec74defc483e

https://stackoverflow.com/questions/72828361/what-are-staletime-and-cachetime-in-react-query




