# Overview
This is a simple wrapper for MyJSON.com the simple JSON store for your web or mobile app: [http://myjson.com/](http://myjson.com/)

## Functions

<dl>
<dt><a href="#get">get(binId)</a></dt>
<dd><p>The get function returns the JSON object associated with the bin id.</p>
</dd>
<dt><a href="#create">create()</a> ⇒ <code>string</code></dt>
<dd><p>The create function creates a new myJSON bin(object).
Returns to you the ID of the bin that was</p>
</dd>
<dt><a href="#update">update(binId, jsonObject)</a></dt>
<dd><p>The update function allows you to update the JSON object associated with the bin id.</p>
</dd>
</dl>

<a name="get"></a>

## get(binId)
The get function returns the JSON object associated with the bin id.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| binId | <code>string</code> | the id of the bin you want to get the JSON for. |

<a name="create"></a>

## create()
The create function creates a new myJSON bin(object).
Returns to you the ID of the bin that was

**Kind**: global function
**Returns**: <code>string</code> - binId - the id of the MyJSON bin(object) that was created
<a name="update"></a>

## update(binId, jsonObject)
The update function allows you to update the JSON object associated with the bin id.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| binId | <code>string</code> | the id of the bin you want to get the JSON for. |
| jsonObject | <code>string</code> | the updated JSON object |
