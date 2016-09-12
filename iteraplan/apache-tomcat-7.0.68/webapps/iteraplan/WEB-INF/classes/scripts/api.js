print('loading api...');

var api = (function() {
	
	this.updateFlatModel = function(){
		this.datamodel = new FlatModel(javaApi.getFlatModel());
	}
	
	function FlatModel(javaModel) {
		this.getAllTypeNames = function() {
			return transformToJsArray(javaModel.getAllTypeNames(), wrapValue);
		};

		this.getAllPropertyNamesByType = function(typePersistentName) {
			return transformToJsArray(javaModel
					.getAllPropertyNamesByType(typePersistentName), wrapValue);
		};

		this.getAllRelationshipNamesByType = function(typePersistentName) {
			return transformToJsArray(javaModel
					.getAllRelationshipNamesByType(typePersistentName),
					wrapValue);
		};

		this.findByType = function(typePersistentName) {
			return transformToJsArray(javaModel.findByType(typePersistentName),
					wrapObject);
		};

		this.findByTypeAndId = function(typePersistentName, id) {
			return wrapObject(javaModel.findByTypeAndId(typePersistentName, id));
		};

		this.findByTypeAndName = function(typePersistentName, name) {
			return wrapObject(javaModel.findByTypeAndName(typePersistentName,
					name));
		};

		this.create = function(typePersistentName) {
			return wrapObject(javaModel.newObject(typePersistentName));
		};

	}

	function FlatObject(javaObject) {
		this.getId = function() {
			return javaObject.getId();
		};

		this.getValue = function(propertyPersistentName) {
			return wrapValue(javaObject.getValue(propertyPersistentName));
		};

		this.getValues = function(propertyPersistentName) {
			return transformToJsArray(javaObject
					.getValues(propertyPersistentName), wrapValue);
		};

		this.getRelatedObject = function(relationshipEndPersistentName) {
			return wrapObject(javaObject
					.getRelatedObject(relationshipEndPersistentName));
		};

		this.getRelatedObjects = function(relationshipEndPersistentName) {
			return transformToJsArray(javaObject
					.getRelatedObjects(relationshipEndPersistentName),
					wrapObject);
		};
		
		this.remove = function() {
			return javaObject.remove();
		};

		this.connect = function(objectToConnect, relationshipEndPersistentName) {
			return javaObject.connect(objectToConnect.getJavaObject(),
					relationshipEndPersistentName);
		};

		this.disconnect = function(objectToDisconnect,
				relationshipEndPersistentName) {
			return javaObject.disconnect(objectToDisconnect.getJavaObject(),
					relationshipEndPersistentName);
		};

		this.setValue = function(propPersistentName, newValue) {
			if (newValue instanceof Date){
				var dateAsDouble = Date.parse(newValue);
				return javaObject.setDateValue(propPersistentName, dateAsDouble);
			}
			if (newValue instanceof Object){
				var from = Date.parse(newValue.from);
				var to = Date.parse(newValue.to);
				return javaObject.setDurationValue(propPersistentName, from, to); 
				return true;
			}
			
			return javaObject.setValue(propPersistentName, newValue);
		};

		this.setValues = function(propPersistentName, newValues) {
			return javaObject.setValues(propPersistentName, newValues);
		};
		
		this.clearValues = function(propPersistentName) {		
			return javaObject.clearValues(propPersistentName);
		};
		
		this.addValue = function(propPersistentName, newValue){
			return javaObject.addValue(propPersistentName, newValue);
		};
		
		this.removeValue = function(propPersistentName, valueToDelete){
			return javaObject.removeValue(propPersistentName, valueToDelete);
		};
		
		this.getJavaObject = function() {
			return javaObject;
		};
	}

	function wrapValue(javaValue) {
		if (javaValue instanceof java.util.Date) {
			return makeDate(javaValue);
		} else if (javaValue instanceof java.lang.String) {
			return String(javaValue);
		} else if (javaValue instanceof java.lang.Integer) {
			return parseInt(javaValue);
		} else if (javaValue instanceof java.lang.Double) {
			return parseFloat(javaValue);
		} else if (javaValue instanceof java.lang.Object
				&& javaValue.getClass().getSimpleName().indexOf(
						"SimpleDuration") !== -1) {
			return {
				from : makeDate(javaValue.from),
				to : makeDate(javaValue.to)
			};
		}
		return javaValue;

		function makeDate(javaDate) {
			if (!javaDate) {
				return null;
			}
			var timestamp = java.lang.Long.valueOf(javaDate.getTime())
					.doubleValue();
			return new Date(timestamp);
		}
	}

	function wrapObject(javaObject) {
		if (!javaObject) {
			return null;
		}
		return new FlatObject(javaObject);
	}

	function wrapSingleChange(javaValue) {
		return {
			persistentName: javaValue.persistentName,
			removed: wrapValue(javaValue.removed),
			added: wrapValue(javaValue.added)
		};
	}

	function transformToJsArray(javaList, singleTransform) {
		var javaArray = javaList.toArray();
		var jsArray = [];
		for (var i = 0; i < javaArray.length; i++) {
			if (!singleTransform) {
				jsArray.push(javaArray[i]);
			} else {
				jsArray.push(singleTransform(javaArray[i]));
			}
		}
		return jsArray;
	}

	this.updateFlatModel();
	
	this.subscribeFor = function(buildingBlockType, reactionFunction) {
		buildingBlockType = buildingBlockType.toLowerCase();
		if (registration[buildingBlockType]) {
			registration[buildingBlockType].push(reactionFunction);
		} else {
			registration[buildingBlockType] = [ reactionFunction ];
		}
	};

	this.receiveEvent = function(buildingBlockType, event) {
		buildingBlockType = buildingBlockType.toLowerCase();
		var eventChanges = transformEventArray(event);
		if (registration[buildingBlockType]) {
			registration[buildingBlockType].forEach(function(func) {
				func(buildingBlockType, eventChanges);
			});
		}
	};

	function transformEventArray(eventChanges) {
		jsEventChanges = transformToJsArray(eventChanges, transformBbChange);
		return jsEventChanges;

		function transformBbChange(javaBbChange) {
			return {
				id: wrapValue(javaBbChange.id),
				changeType: wrapValue(javaBbChange.changeType),
				buildingBlockChanges: transformToJsArray(javaBbChange.buildingBlockChanges, wrapSingleChange)
			}
		}
	}

	var registration = {};

	return this;
})();