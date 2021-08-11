(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7969],{4137:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7144:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),l=(n(7294),n(4137)),i=["components"],o={title:"Other SQLAlchemy databases",sidebar_label:"Other SQLAlchemy databases",slug:"/metadata-ingestion/source_docs/sqlalchemy",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/sqlalchemy.md"},s="Other SQLAlchemy databases",d={unversionedId:"metadata-ingestion/source_docs/sqlalchemy",id:"metadata-ingestion/source_docs/sqlalchemy",isDocsHomePage:!1,title:"Other SQLAlchemy databases",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/sqlalchemy.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/sqlalchemy",permalink:"/docs/metadata-ingestion/source_docs/sqlalchemy",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/sqlalchemy.md",version:"current",frontMatter:{title:"Other SQLAlchemy databases",sidebar_label:"Other SQLAlchemy databases",slug:"/metadata-ingestion/source_docs/sqlalchemy",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/sqlalchemy.md"},sidebar:"overviewSidebar",previous:{title:"SQL Profiles",permalink:"/docs/metadata-ingestion/source_docs/sql_profiles"},next:{title:"Superset",permalink:"/docs/metadata-ingestion/source_docs/superset"}},p=[{value:"Setup",id:"setup",children:[]},{value:"Capabilities",id:"capabilities",children:[]},{value:"Quickstart recipe",id:"quickstart-recipe",children:[]},{value:"Config details",id:"config-details",children:[]},{value:"Compatibility",id:"compatibility",children:[]},{value:"Questions",id:"questions",children:[]}],u={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"other-sqlalchemy-databases"},"Other SQLAlchemy databases"),(0,l.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"To install this plugin, run ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[sqlalchemy]'"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlalchemy")," source is useful if we don't have a pre-built source for your chosen\ndatabase system, but there is an ",(0,l.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/14/dialects/"},"SQLAlchemy dialect"),"\ndefined elsewhere. In order to use this, you must ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install")," the required dialect packages yourself."),(0,l.kt)("h2",{id:"capabilities"},"Capabilities"),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Metadata for databases, schemas, views, and tables"),(0,l.kt)("li",{parentName:"ul"},"Column types associated with each table"),(0,l.kt)("li",{parentName:"ul"},"Table, row, and column statistics via optional ",(0,l.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"SQL profiling"))),(0,l.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: sqlalchemy\n  config:\n    # Coordinates\n    connect_uri: "dialect+driver://username:password@host:port/database"\n\nsink:\n  # sink configs\n')),(0,l.kt)("h2",{id:"config-details"},"Config details"),(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("p",null,"As a SQL-based service, the Athena integration is also supported by our SQL profiler. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"here")," for more details on configuration."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"platform")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Name of platform being ingested, used in constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"connect_uri")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"URI of database to connect to. See ",(0,l.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls"},"https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"env")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,l.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options.<option>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,l.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include_tables")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether tables should be ingested.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include_views")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether views should be ingested.")))),(0,l.kt)("h2",{id:"compatibility"},"Compatibility"),(0,l.kt)("p",null,"Coming soon!"),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}c.isMDXComponent=!0}}]);