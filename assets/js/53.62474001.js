(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{432:function(e,t,n){"use strict";n.r(t);var o=n(51),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"server-configuration-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration-file"}},[e._v("#")]),e._v(" Server Configuration File")]),e._v(" "),n("p",[e._v("In this section, we will introduce parameters in the server configuration file.\nIntroduction to the server configuration file")]),e._v(" "),n("p",[e._v("The server configuration file defines the node configuration of IBAX.\nLocation")]),e._v(" "),n("p",[e._v("This file is located in the working directory of the server and is named config.toml.\nSections")]),e._v(" "),n("p",[e._v("The configuration file consists the following sections:")]),e._v(" "),n("p",[e._v("general section")]),e._v(" "),n("p",[e._v("It defines the working directory DataDir, the first block directory FirstBlockPath and other parameters.")]),e._v(" "),n("p",[e._v("[TCPServer]")]),e._v(" "),n("p",[e._v("It defines the TCP service parameters.")]),e._v(" "),n("p",[e._v("TCPServer is used for the network interaction between nodes.")]),e._v(" "),n("p",[e._v("[HTTP]")]),e._v(" "),n("p",[e._v("It defines the HTTP service parameters.")]),e._v(" "),n("p",[e._v("HTTPServer provides RESTful APIs.")]),e._v(" "),n("p",[e._v("[DB]")]),e._v(" "),n("p",[e._v("It defines parameters of the PostgreSQL node database.")]),e._v(" "),n("p",[e._v("[StatsD]")]),e._v(" "),n("p",[e._v("It defines parameters of the node operation indicator collector StatsD.")]),e._v(" "),n("p",[e._v("[Centrifugo]")]),e._v(" "),n("p",[e._v("It defines parameters of the notification service Centrifugo.")]),e._v(" "),n("p",[e._v("[Log]")]),e._v(" "),n("p",[e._v("It defines parameters of the log service Log.")]),e._v(" "),n("p",[e._v("[TokenMovement]")]),e._v(" "),n("p",[e._v("It defines parameters of the token circulation service TokenMovement.\nAn example configuration file")]),e._v(" "),n("p",[e._v('PidFilePath = "/IBAX-data/go-ibax.pid"\nLockFilePath = "/IBAX-data/go-ibax.lock"\nDataDir = "/IBAX-data"\nKeysDir = "/IBAX-data"\nTempDir = "/var/folders/_l/9md_m4ms1651mf5pbng1y1xh0000gn/T/IBAX-temp"\nFirstBlockPath = "/IBAX-data/1block"\nTLS = false\nTLSCert = ""\nTLSKey = ""\nOBSMode = "none"\nHTTPServerMaxBodySize = 1048576\nMaxPageGenerationTime = 3000\nNodesAddr = []')]),e._v(" "),n("p",[e._v('[TCPServer]\nHost = "127.0.0.1"\nPort = 7078')]),e._v(" "),n("p",[e._v('[HTTP]\nHost = "127.0.0.1"\nPort = 7079')]),e._v(" "),n("p",[e._v('[DB]\nName = "IBAX"\nHost = "127.0.0.1"\nPort = 5432\nUser = "postgres"\nPassword = "123456"\nLockTimeout = 5000')]),e._v(" "),n("p",[e._v('[StatsD]\nHost = "127.0.0.1"\nPort = 8125\nName = "IBAX"')]),e._v(" "),n("p",[e._v('[Centrifugo]\nSecret = "127.0.0.1"\nURL = "127.0.0.1"')]),e._v(" "),n("p",[e._v('[Log]\nLogTo = "stdout"\nLogLevel = "ERROR"\nLogFormat = "text"\n[Log.Syslog]\nFacility = "kern"\nTag = "go-ibax"')]),e._v(" "),n("p",[e._v('[TokenMovement]\nHost = ""\nPort = 0\nUsername = ""\nPassword = ""\nTo = ""\nFrom = ""\nSubject = ""')])])}),[],!1,null,null,null);t.default=r.exports}}]);