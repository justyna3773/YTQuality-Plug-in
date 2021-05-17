# YTQuality-Plug-in
Plug-in to force YT quality and collect statistics from 'stats for nerds'
# Installation
The most basic method would be to:
1. Download extension to your PC.
2. Enter chrome://extensions in your browser
3. Click 'Load unpacked' and select folder with this extension.
# Usage
Extension enables you to define your own scenario for forcing quality changes on YouTube. It can be done in file quality_set.js via function:
```javascript
setTimeout(setQuality, 70000, "small")
```
which takes name of the function "setQuality" as argument, the second argument is the total time counting from starting the extension and the last is the preferred quality to be set. Available qualities are: 
  'highres',
  'hd2880',
  'hd2160',
  'hd1440',
  'hd1080',
  'hd720',
  'large',
  'medium',
  'small',
  'tiny',
  'auto'
  
  At the end the extension downloads files speeds.csv, resolutions.csv and times.csv which contain 'Connection speed', 'Current resolution' and times collected. 
