# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
# %%
import urllib.request, urllib.error, urllib.parse

url = 'https://www.4icu.org/'

response = urllib.request.urlopen(url)
webContent = response.read()

print(webContent[0:1000])


# %%
url = 'https://www.4icu.org/'

response = urllib.request.urlopen(url)
webContent = response.read()

f = open('demosyllabus.html', 'wb')
f.write(webContent)
f.close()


