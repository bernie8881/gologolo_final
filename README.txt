# Along with your ZIP file submission, include a README file that has a set of working queries that can be entered 
# right into the GraphiQL Web application for adding, querying, updating, and removing logos in the database.
 
{
    logos {
              _id
            text
            color
            fontSize
            backgroundColor
            borderColor
            borderRadius
            borderWidth
            padding
            margin
	    width
	    height
	    image
	    imageSize
	    textX
	    textY
      imageX
      imageY
            lastUpdate
        }
	    logo(id: "5e93943599d3a5247923dfc5") {
        text
            color
            fontSize
            backgroundColor
            borderColor
            borderRadius
            borderWidth
            padding
            margin
	    width
	    height
	    image
	    imageSize
	    textX
	    textY
      imageX
      imageY
            lastUpdate

    }	 
} 


mutation {
  addLogo (
    text: "Debugging Enterprises",
    color: "#ff33dd",
    fontSize: 44,
    backgroundColor: "#7a8a20",
    borderColor: "#7a8a20",
    borderRadius: 1,
    borderWidth: 1,
    padding: 1,
    margin: 1,
    width: 200,
    height: 100,
    image: "",
    imageSize: 2,
    textX: 1,
    textY: 1,
    imageX: 1,
    imageY: 1
  ) {
    _id
    text
    color
    fontSize
    backgroundColor
    borderColor
    borderRadius
    borderWidth
    padding
    margin
    width
    height
    image
    imageSize
    textX
    textY
    imageX
    imageY
    lastUpdate
  }

}

mutation {
  addLogo (
    text: "Super Debugging Enterprises",
    color: "#ff33dd",
    fontSize: 44,
    backgroundColor: "#7a8a20",
    borderColor: "#7a8a20",
    borderRadius: 1,
    borderWidth: 1,
    padding: 1,
    margin: 1,
    width: 200,
    height: 200,
    image: "",
    imageSize: 2,
    textX: 1,
    textY: 1,
    imageX: 1,
    imageY: 1
  ) {
    _id
    text
    color
    fontSize
    backgroundColor
    borderColor
    borderRadius
    borderWidth
    padding
    margin
    width
    height
    image
    imageSize
    textX
    textY
    imageX
    imageY
    lastUpdate
  }

}



mutation {
  updateLogo (
    id: "5e94bbd054727253f5abab8a",
    text: "My Very Dumb Company",
    color: "#ffeedd",
    fontSize: 32,
    backgroundColor: "#7a8a20",
    borderColor: "#7a8a20",
    borderRadius: 1,
    borderWidth: 1,
    padding: 1,
    margin: 1,
    width: 200,
    height: 200,
    image: "",
    imageSize: 2,
    textX: 1,
    textY: 1,
    imageX: 1,
    imageY: 1
  ) {
    _id
    text
    color
    fontSize
    backgroundColor
    borderColor
    borderRadius
    borderWidth
    padding
    margin
    width
    height
    image
    imageSize
    textX
    textY
    imageX
    imageY
    lastUpdate
  }
}


mutation {
  removeLogo (id: "5e94bbd054727253f5abab8a") {
    _id
    text
    color
    fontSize
    backgroundColor
    borderColor
    borderRadius
    borderWidth
    padding
    margin
    width
    height
    image
    imageSize
    textX
    textY
    imageX
    imageY
    lastUpdate
  }
}