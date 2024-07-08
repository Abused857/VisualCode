class Language:
    def __init__(self, id, name, abbreviation, flag, order, created_at=None, updated_at=None, deleted_at=None):
        self.id = id
        self.name = name
        self.abbreviation = abbreviation
        self.flag = flag
        self.order = order
        self.created_at = created_at
        self.updated_at = updated_at
        self.deleted_at = deleted_at

    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serializable(self):
        return {
            'id': self.id,
            'name': self.name,
            'abbreviation': self.abbreviation,
            'flag': self.flag,
            'order': self.order,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'deleted_at': self.deleted_at,
        }