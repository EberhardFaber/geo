import config
import MySQLdb


def ins_state(state):
    return 'INSERT INTO Points (test) VALUES ("Yes")'.format(state)


def test():
    session = MySQLdb.connect(
        user=config.DB_USER,
        host=config.DB_HOST,
        passwd=config.DB_PSW,
        db=config.DB_NAME,
        use_unicode=True,
        charset="utf8"
    )
    cursor = session.cursor()
    sql = ins_state
    try:
        cursor.execute(sql)
        session.commit()
        print("1")
    except MySQLdb.Error as e:
        print("MySQL Error [%d]: %s" % (e.args[0], e.args[1]))
        print("2")
        session.rollback()
    finally:
        print("3")
        session.close()

test()